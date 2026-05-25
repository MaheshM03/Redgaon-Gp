import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslator } from "../../context/LanguageContext.js";

export default function Navbar() {

  const {
    currentLanguage,
    selectLanguage,
    t,
  } = useTranslator();

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [openDropdown, setOpenDropdown] =
    useState(null);

  useEffect(() => {

    if (mobileMenu) {

      document.body.style.overflow =
        "hidden";

    } else {

      document.body.style.overflow =
        "auto";

    }

    return () => {

      document.body.style.overflow =
        "auto";

    };

  }, [mobileMenu]);

  const navLinks = [

    {
      nameKey: "nav.home",
      to: "/",
    },

    {
      nameKey:
        "nav.adminCommittee",

      to: "/admin-committee",
    },

    {
  nameKey: "nav.otherCommittees",
  to: "/other-committees",
  hasDropdown: true,

  children: [
    {
      nameKey: "otherCommittees.vhnwsc",
      to: "/other-committees/vhnwsc",
    },

    {
      nameKey: "otherCommittees.vwssc",
      to: "/other-committees/vwssc",
    },
  ],
},
    {
      nameKey:
        "nav.citizenPortal",

      to: "/citizen-portal",

      hasDropdown: true,

      children: [

        {
          nameKey: "birth",
          to: "/birth",
        },

        {
          nameKey: "death",
          to: "/death",
        },

        {
          nameKey: "residence",
          to: "/residence",
        },

        {
          nameKey: "marriage",
          to: "/marriage",
        },

        {
          nameKey:
            "buildingPermit",

          to: "/building-permit",
        },

        {
          nameKey:
            "businessTrade",

          to: "/business",
        },

        {
          nameKey:
            "property",

          to: "/property-card",
        },

        {
          nameKey:
            "nav.schemes",

          to: "/schemes",
        },

      ],
    },

    {
      nameKey:
        "nav.smartVillage",

      to: "/smart-village",
    },

    {
      nameKey:
        "nav.rti",

      to: "/rti",
    },

    {
      nameKey:
        "nav.grievance",

      to: "/grievance",
    },

    {
      nameKey:
        "nav.activity",

      to: "/activity",
    },

    {
      nameKey: "nav.aboutus",
      to: "/aboutus",
    },

    {
      nameKey: "nav.allNews",
      to: "/allnews",
    },

    {
      nameKey: "nav.digitalLibrary",
      to: "/digital-library",
    },

    {
      nameKey: "nav.declarations",
      to: "/declaration",
    },

  ];


  return (
    <>

      <style>{`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html,
body{
  margin:0;
  padding:0;

  overflow-x:hidden;
}

/* ROOT */

.nb-root{
  width:100%;

  position:sticky;
<<<<<<< HEAD

=======
>>>>>>> 3067eef9686c684fa8728dc52d2e1fc0c724ce39
  top:0;

  z-index:1000;

  background:#ffffff;

  font-family:
    'Inter',
    'Noto Sans Devanagari',
    sans-serif;

  box-shadow:
    0 2px 10px rgba(0,0,0,0.05);
}

/* TOPBAR */

.nb-topbar{
  background:
    linear-gradient(
      90deg,
      #0f172a,
      #1e3a8a
    );

  padding:5px 14px;

  display:flex;

  justify-content:
    space-between;

  align-items:center;

  color:white;
}

.nb-topbar-left{
  display:flex;

  gap:14px;

  font-size:11px;

  font-weight:500;
}

.nb-topbar-right{
  display:flex;

  gap:6px;
}

/* LANG BUTTON */

.nb-lang-btn{
  border:none;

  padding:4px 9px;

  border-radius:6px;

  cursor:pointer;

  font-size:10px;

  font-weight:700;

  transition:0.2s ease;
}

.nb-lang-btn.active{
  background:#fbbf24;

  color:#0f172a;
}

.nb-lang-btn:not(.active){
  background:
    rgba(255,255,255,0.10);

  color:white;
}

/* LOGOBAR */

.nb-logobar{
  background:#ffffff;

  padding:10px 16px;

  display:flex;

  justify-content:center;

  align-items:center;

  gap:14px;

  border-bottom:
    1px solid #e2e8f0;

  text-align:center;
}

.nb-logo-imgs{
  display:flex;

  align-items:center;

  justify-content:center;
}

.nb-logo-img{
  width:46px;
  height:46px;

  object-fit:cover;

  border-radius:10px;

  border:
    1px solid #dbeafe;
}

.nb-logo-text{
  display:flex;

  flex-direction:column;

  align-items:center;

  justify-content:center;
}

.nb-logo-title{
  font-size:
    clamp(15px,2vw,22px);

  font-weight:800;

  color:#0f172a;

  line-height:1.2;

  text-align:center;
}

.nb-logo-sub{
  font-size:
    clamp(9px,1vw,11px);

  color:#64748b;

  margin-top:2px;

  font-weight:600;

  text-transform:uppercase;

  text-align:center;
}

/* NAVBAR */

.nb-nav{
  background:
    rgba(15,23,42,0.98);

  padding:0 16px;

  min-height:48px;

  display:flex;

  justify-content:
    space-between;

  align-items:center;
}

.nb-links{
  display:flex;

  align-items:center;

  gap:2px;
}

.nb-link{
  text-decoration:none;

  color:#cbd5e1;

  font-size:12px;

  font-weight:500;

  padding:14px 9px;

  transition:0.2s ease;
}

.nb-link:hover{
  color:#fbbf24;
}

/* ADMIN */

.nb-admin-btn{
  background:#16a34a;

  color:white;

  text-decoration:none;

  padding:7px 14px;

  border-radius:8px;

  font-size:11px;

  font-weight:700;

  transition:0.2s ease;
}

.nb-admin-btn:hover{
  background:#15803d;
}

/* DROPDOWN */

.nb-link-wrapper{
  position:relative;

  display:flex;

  align-items:center;
}

.nb-dropdown-menu{
  position:absolute;

  top:100%;
  left:0;

  background:
    rgba(15,23,42,0.99);

  border:
    1px solid #334155;

  border-radius:10px;

  min-width:210px;

  overflow:hidden;

  display:flex;

  flex-direction:column;

  opacity:0;

  visibility:hidden;

  transform:
    translateY(-8px);

  transition:0.2s ease;


  visibility:visible;

  transform:
    translateY(0);
}

.nb-dropdown-item{
  color:#cbd5e1;

  text-decoration:none;

  padding:11px 14px;

  border-bottom:
    1px solid rgba(255,255,255,0.04);

  font-size:12px;

  transition:0.2s ease;
}

.nb-dropdown-item:hover{
  background:
    rgba(251,191,36,0.10);

  color:#fbbf24;
}

/* HAMBURGER */

.nb-hamburger{
  display:none;

  background:none;

  border:none;

  color:white;

  font-size:24px;

  cursor:pointer;
}

/* OVERLAY */

.nb-overlay{
  position:fixed;

  inset:0;

  background:
    rgba(0,0,0,0.45);

  z-index:1400;

  opacity:0;

  visibility:hidden;

  transition:0.3s ease;
}

.nb-overlay.show{
  opacity:1;

  visibility:visible;
}

/* MOBILE DRAWER */

.nb-drawer{
  position:fixed;

  top:0;
  right:0;

  width:82%;
  max-width:300px;

  height:100vh;

  background:
    linear-gradient(
      180deg,
      #0f172a,
      #1e3a8a
    );

  z-index:2000;

  padding:16px;

  display:flex;

  flex-direction:column;

  gap:4px;

  overflow-y:auto;

  transform:
    translateX(100%);

  transition:0.3s ease;
}

.nb-drawer.open{
  transform:
    translateX(0);
}

.nb-close{
  background:none;

  border:none;

  color:white;

  font-size:24px;

  align-self:flex-end;

  cursor:pointer;

  margin-bottom:6px;
}

.nb-mob-link{
  color:white;

  text-decoration:none;

  padding:12px 10px;

  border-radius:8px;

  transition:0.2s ease;

  display:block;

  font-size:13px;
}

.nb-mob-link:hover{
  background:
    rgba(255,255,255,0.08);
}

/* TABLET */

@media(max-width:900px){

  .nb-links,
  .nb-admin-btn{
    display:none;
  }

  .nb-hamburger{
    display:block;
  }
}

/* MOBILE */

@media(max-width:600px){

  body{
    margin:0;
    padding:0;
  }

  .nb-root{
    margin:0;
    padding:0;
  }

  /* TOPBAR */

  .nb-topbar{
    padding:4px 8px;

    min-height:32px;
  }

  .nb-topbar-left{
    display:none;
  }

  .nb-topbar-right{
    gap:4px;
  }

  .nb-lang-btn{
    padding:3px 8px;

    font-size:9px;
  }

  /* LOGOBAR */

  .nb-logobar{
    padding:6px 8px;

    gap:6px;

    min-height:58px;
  }

  .nb-logo-img{
    width:30px;
    height:30px;

    border-radius:6px;
  }

  .nb-logo-title{
    font-size:11px;

    line-height:1.2;
  }

  .nb-logo-sub{
    font-size:6px;

    margin-top:1px;
  }

  /* NAVBAR */

  .nb-nav{
    min-height:40px;

    padding:0 8px;
  }

  .nb-hamburger{
    font-size:20px;
  }

  /* DRAWER */

  .nb-drawer{
    width:84%;
  }

  .nb-mob-link{
    font-size:12px;

    padding:10px 8px;
  }
}

      `}</style>

      <div className="nb-root">

        {/* TOPBAR */}

        <div className="nb-topbar">

          <div className="nb-topbar-left">

            <span>
              {t("navbar.phone")}
            </span>

            <span>
              {t("navbar.email")}
            </span>

          </div>

          <div className="nb-topbar-right">

            <button
              className={`nb-lang-btn ${
                currentLanguage ===
                "en"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                selectLanguage("en")
              }
            >
              EN
            </button>

            <button
              className={`nb-lang-btn ${
                currentLanguage ===
                "mr"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                selectLanguage("mr")
              }
            >
              मराठी
            </button>

          </div>

        </div>

        {/* LOGOBAR */}

        <div className="nb-logobar">

          {/* EMBLEM LEFT */}

          <div className="nb-logo-imgs">

            <img
              src="/emblem.jfif"
              alt="Emblem"
              className="nb-logo-img"
            />

          </div>

          {/* CENTER TEXT */}

          <div className="nb-logo-text">

            <div className="nb-logo-title">

              {currentLanguage === "mr"
                ? "ग्रामपंचायत रेडगाव खुर्द"
                : "Gram Panchayat Redgaon Kh"}

            </div>

            <div className="nb-logo-sub">

              {currentLanguage === "mr"
                ? "डिजिटल सेवा पोर्टल"
                : "Digital Services Portal"}

            </div>

          </div>

          {/* LOGO RIGHT */}

          <div className="nb-logo-imgs">

            <img
              src="/favicon.jpg"
              alt="Logo"
              className="nb-logo-img"
            />

          </div>

        </div>

        {/* NAVBAR */}

        <nav className="nb-nav">

          <button
            className="nb-hamburger"

            onClick={() =>
              setMobileMenu(true)
            }
          >
            ☰
          </button>

          <div className="nb-links">

            {navLinks.map((link) => (

              <div
                key={link.to}
                className="nb-link-wrapper"

                onMouseEnter={() =>
                  link.hasDropdown &&
                  setOpenDropdown(link.to)
                }

                onMouseLeave={() =>
                  link.hasDropdown &&
                  setOpenDropdown(null)
                }
              >

                {link.hasDropdown ? (

                  <>
                    <Link
                      to={link.to}
                      className="nb-link"
                    >
                      {t(link.nameKey)}
                    </Link>

                    <div
                      className={`nb-dropdown-menu ${
                        openDropdown ===
                        link.to
                          ? "open"
                          : ""
                      }`}
                    >

                      {link.children.map(
                        (child) => (

                          <Link
                            key={child.to}

                            to={child.to}

                            className="nb-dropdown-item"
                          >

                            {t(child.nameKey)}

                          </Link>

                        )
                      )}

                    </div>
                  </>

                ) : (

                  <Link
                    to={link.to}
                    className="nb-link"
                  >

                    {t(link.nameKey)}

                  </Link>

                )}

              </div>

            ))}

          </div>

          <Link
            to="/admin-login"
            className="nb-admin-btn"
          >
            Admin Login
          </Link>

        </nav>

      </div>

    </>
  );
}