require('dotenv').config();

const express = require('express');

const cors = require('cors');

const helmet = require('helmet');

const morgan = require('morgan');

const rateLimit = require('express-rate-limit');

const mongoSanitize =
  require('express-mongo-sanitize');

const xss = require('xss-clean');

const multer = require('multer');

const path = require('path');

const mongoose = require('mongoose');

const session =
  require('express-session');

const cookieParser =
  require('cookie-parser');

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
  process.env.MONGO_URI;

if (!mongoUri) {

  console.error(
    '❌ MongoDB connection error: missing MONGODB_URI'
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

/* ================= MIDDLEWARE ================= */

app.use(
  express.json({
    limit: '10mb'
  })
);

app.use(helmet());

app.use(morgan('dev'));

app.use(mongoSanitize());

app.use(xss());

/* ================= RATE LIMIT ================= */

app.use(
  rateLimit({
    windowMs:
      15 * 60 * 1000,

    max: 100
  })
);

/* ================= CORS ================= */

app.use(
  cors({

    origin: [
      'http://localhost:3000',

      'https://grampanchyat1.onrender.com',

      'https://grampanchyat-065z.onrender.com'
    ],

    credentials: true

  })
);

/* ================= SESSION ================= */

app.use(cookieParser());

app.use(
  session({

    secret:
      'grampanchayat-session-secret',

    resave: false,

    saveUninitialized: true,

    cookie: {

      secure: false,

      maxAge:
        24 *
        60 *
        60 *
        1000

    }

  })
);

/* ================= JWT ================= */

const SECRET =
  process.env.JWT_SECRET ||
  'grampanchayat-admin-secret-key-change-in-prod';

console.log(
  '[auth] using JWT_SECRET:',
  Boolean(process.env.JWT_SECRET)
    ? 'from env'
    : 'default'
);

/* ================= TEST ROUTE ================= */

app.get(
  '/api/test',
  (req, res) => {

    res.json({
      message:
        'API is working 🚀'
    });

  }
);

/* ================= ROOT ================= */

app.get(
  '/',
  (req, res) => {

    res.send(
      'API is running 🚀'
    );

  }
);

/* ================= LOGIN ================= */

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

          path: '/',

          sameSite: 'lax',

          secure: false,

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
          'Logged in',
        token
      });
    }

    res.status(401).json({
      success: false,
      message:
        'Invalid credentials'
    });

  }
);

/* ================= PUBLIC NEWS ================= */

app.use(
  '/api/news',
  newsRoutes
);

/* ================= ROUTES ================= */

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
  '/api/declarations/',
  declarationsRoutes
);

/* ================= CERTIFICATES ================= */

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

/* ================= ADMIN ================= */

app.use(
  '/api/admin',
  authMiddleware,
  require('./routes/admin')
);

/* ================= UPLOADS ================= */

app.use(
  '/uploads',
  express.static(
    path.join(
      __dirname,
      'uploads'
    )
  )
);

/* ================= ERROR HANDLER ================= */

app.use(
  (err, req, res, next) => {

    console.error(err);

    if (
      req.path &&
      req.path.startsWith('/api')
    ) {

      return res.status(500).json({
        message:
          'Server error'
      });
    }

    next(err);

  }
);

/* ================= PORT ================= */

const PORT =
  process.env.PORT || 10000;

/* ================= START ================= */

app.listen(PORT, () => {

  console.log(
    `🚀 Server running on port ${PORT}`
  );

});