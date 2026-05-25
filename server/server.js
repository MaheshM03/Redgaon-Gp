require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

/* ================= ROUTES ================= */

const birthCertRoutes =
  require('./routes/birthCertificate');

const deathCertRoutes =
  require('./routes/deathCertificate');

const residenceCertRoutes =
  require('./routes/residenceCertificate');

const declarationsRoutes =
  require('./routes/declarations');

const newsRoutes =
  require('./routes/news');

const kunbiRoutes =
  require('./routes/kunbi');

const grievanceRoutes =
  require('./routes/grievance');

const logoutRoutes =
  require('./routes/logout');

const authMiddleware =
  require('./middleware/auth');

/* ================= APP ================= */

const app = express();

/* ================= MONGODB ================= */

const mongoUri =
  process.env.MONGODB_URI ||
  process.env.MONGO_URI ||
  'mongodb://localhost:27017/grampanchyat';

if (!mongoUri) {

  console.error(
    '❌ MongoDB connection error: missing MONGODB_URI/MONGO_URI'
  );

  process.exit(1);
}


mongoose.connect(
  mongoUri,
  {
    dbName: 'grampanchyat'
  }
)

.then(() => {

  console.log(
    '✅ MongoDB connected successfully'
  );

})

.catch((err) => {

  console.error(
    '❌ MongoDB connection error:',
    err
  );

  process.exit(1);

});

/* ================= MULTER ================= */

const storage =
  multer.diskStorage({

    destination:
      (req, file, cb) => {

        cb(null, 'uploads/');

      },

    filename:
      (req, file, cb) => {

        const uniqueName =
          Date.now() +
          '-' +
          Math.round(
            Math.random() * 1E9
          ) +
          path.extname(
            file.originalname
          );

        cb(null, uniqueName);

      }

  });

const upload = multer({

  storage,

  limits: {
    fileSize: 5 * 1024 * 1024
  },

  fileFilter:
    (req, file, cb) => {

      if (
        file.mimetype.startsWith(
          'image/'
        ) ||
        file.mimetype ===
          'application/pdf'
      ) {

        cb(null, true);

      } else {

        cb(
          new Error(
            'Only images and PDF allowed'
          ),
          false
        );
      }

    }

});

/* ================= BODY PARSER ================= */

app.use(
  express.json({
    limit: '10mb'
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: '10mb'
  })
);

/* ================= SECURITY ================= */

app.use(helmet());

app.use(morgan('dev'));

app.use(mongoSanitize());

app.use(xss());


const limiter = rateLimit({

  windowMs:
    15 * 60 * 1000,

  max: 500,

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    success: false,
    message:
      'Too many requests, please try again later.'
  }

});

app.use('/api', limiter);



app.use(
  cors({

    origin: [

      'http://localhost:3000',

      'http://127.0.0.1:3000',

      'https://redgaon-gp.vercel.app'

    ],

    credentials: true,

    methods: [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'PATCH',
      'OPTIONS'
    ],

    allowedHeaders: [
      'Content-Type',
      'Authorization'
    ]

  })
);



app.use(cookieParser());



app.use(
  session({

    secret:
      process.env.SESSION_SECRET ||
      'grampanchayat-session-secret',

    resave: false,

    saveUninitialized: false,

    cookie: {

      secure: false,

      httpOnly: true,

      sameSite: 'lax',

      maxAge:
        24 *
        60 *
        60 *
        1000

    }

  })
);



const SECRET =
  process.env.JWT_SECRET ||
  'grampanchayat-admin-secret-key-change-in-prod';

console.log(
  '[auth] using JWT_SECRET:',
  Boolean(process.env.JWT_SECRET)
    ? 'from env'
    : 'default'
);



app.get(
  '/',
  (req, res) => {

    res.send(
      '🚀 API is running successfully'
    );

  }
);



app.get(
  '/api/test',
  (req, res) => {

    res.json({
      success: true,
      message:
        'API is working 🚀'
    });

  }
);



app.post(
  '/api/auth/login',
  (req, res) => {

    const {
      username,
      password
    } = req.body;

    if (
      username === 'admin' &&
      password === 'admin123'
    ) {

      const token =
        jwt.sign(
          {
            adminId: 'admin'
          },
          SECRET,
          {
            expiresIn: '24h'
          }
        );

      res.cookie(
        'adminToken',
        token,
        {

          httpOnly: false,

          secure: false,

          sameSite: 'lax',

          path: '/',

          maxAge:
            24 *
            60 *
            60 *
            1000

        }
      );

      return res.json({

        success: true,

        message:
          'Logged in successfully',

        token

      });
    }

    return res.status(401).json({

      success: false,

      message:
        'Invalid credentials'

    });

  }
);


app.use(
  '/api/news',
  newsRoutes
);

app.use(
  '/api/kunbi',
  kunbiRoutes
);

app.use(
  '/api/grievance',
  grievanceRoutes
);

app.use(
  '/api/logout',
  logoutRoutes
);

app.use(
  '/api/declarations',
  declarationsRoutes
);

app.use(
  '/api/birth-certificates',
  birthCertRoutes
);

app.use(
  '/api/death-certificates',
  deathCertRoutes
);

app.use(
  '/api/residence-certificates',
  residenceCertRoutes
);



app.use(
  '/api/admin',
  authMiddleware,
  require('./routes/admin')
);



app.use(
  '/uploads',
  express.static(
    path.join(
      __dirname,
      'uploads'
    )
  )
);



app.use(
  '*',
  (req, res) => {

    res.status(404).json({

      success: false,

      message:
        'Route not found'

    });

  }
);



app.use(
  (err, req, res, next) => {

    console.error(
      '❌ Server Error:',
      err
    );

    if (
      err.name === 'MulterError'
    ) {

      return res.status(400).json({

        success: false,

        message:
          err.message

      });
    }

    return res.status(500).json({

      success: false,

      message:
        'Internal server error'

    });

  }
);



const PORT =
  process.env.PORT || 10000;



app.listen(PORT, () => {

  console.log(
    `🚀 Server running on port ${PORT}`
  );

});