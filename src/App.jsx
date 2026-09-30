import { useMemo, useState } from "react";
import {
    FiActivity,
    FiArrowLeft,
    FiArrowRight,
    FiBell,
    FiBookmark,
    FiBriefcase,
    FiCalendar,
    FiCheck,
    FiCheckCircle,
    FiChevronDown,
    FiClock,
    FiDollarSign,
    FiEdit3,
    FiEye,
    FiFileText,
    FiFilter,
    FiHeart,
    FiHome,
    FiLayers,
    FiLogIn,
    FiLogOut,
    FiMapPin,
    FiMenu,
    FiMoon,
    FiPlus,
    FiSearch,
    FiSend,
    FiSettings,
    FiShield,
    FiStar,
    FiSun,
    FiTrash2,
    FiUpload,
    FiUser,
    FiUsers,
    FiX
} from "react-icons/fi";

import "./index.css";

const jobsData = [
    {
        id: 1,
        title: "مطور React Front-End",
        company: "شركة التقنية الليبية",
        city: "طرابلس",
        category: "البرمجة والتقنية",
        type: "دوام كامل",
        experience: "2 - 4 سنوات",
        salary: "3,500 - 5,000 د.ل",
        posted: "منذ ساعتين",
        featured: true,
        applicants: 18,
        logo: "LT",
        color: "blue",
        skills: ["React", "JavaScript", "CSS", "Git"],
        description:
            "نبحث عن مطور React للانضمام إلى فريق تطوير المنتجات الرقمية وبناء واجهات حديثة وسريعة وقابلة للتوسع."
    },
    {
        id: 2,
        title: "محاسب مالي",
        company: "مجموعة النخبة التجارية",
        city: "بنغازي",
        category: "المحاسبة والمالية",
        type: "دوام كامل",
        experience: "2 - 3 سنوات",
        salary: "2,800 - 4,000 د.ل",
        posted: "منذ 4 ساعات",
        featured: false,
        applicants: 12,
        logo: "EN",
        color: "gold",
        skills: ["Excel", "Accounting", "Reports"],
        description:
            "إدارة الحسابات والتقارير المالية والفواتير ومتابعة العمليات المالية اليومية."
    },
    {
        id: 3,
        title: "مصمم UI/UX",
        company: "استوديو الإبداع",
        city: "طرابلس",
        category: "التصميم",
        type: "دوام كامل",
        experience: "1 - 3 سنوات",
        salary: "3,000 - 4,500 د.ل",
        posted: "منذ 6 ساعات",
        featured: true,
        applicants: 24,
        logo: "CS",
        color: "purple",
        skills: ["Figma", "UI Design", "UX"],
        description:
            "تصميم تجارب رقمية حديثة وواجهات احترافية والعمل مع فريق التطوير."
    },
    {
        id: 4,
        title: "مهندس مدني",
        company: "شركة ليبيا للمقاولات",
        city: "بني وليد",
        category: "الهندسة",
        type: "دوام كامل",
        experience: "3 - 5 سنوات",
        salary: "4,000 - 6,000 د.ل",
        posted: "منذ يوم",
        featured: false,
        applicants: 9,
        logo: "LC",
        color: "green",
        skills: ["AutoCAD", "Civil 3D", "Project Management"],
        description:
            "الإشراف على المشاريع ومتابعة التنفيذ والجودة في مواقع العمل."
    },
    {
        id: 5,
        title: "مسؤول موارد بشرية",
        company: "شركة المستقبل",
        city: "الزاوية",
        category: "الموارد البشرية",
        type: "دوام كامل",
        experience: "2 - 4 سنوات",
        salary: "2,500 - 3,800 د.ل",
        posted: "منذ يوم",
        featured: false,
        applicants: 15,
        logo: "FM",
        color: "orange",
        skills: ["HR", "Recruitment", "Communication"],
        description:
            "إدارة ملفات الموظفين والتوظيف والحضور والانصراف والإجراءات الإدارية."
    },
    {
        id: 6,
        title: "مسوق رقمي",
        company: "وكالة رؤية للتسويق",
        city: "طرابلس",
        category: "التسويق",
        type: "عن بعد",
        experience: "1 - 3 سنوات",
        salary: "2,000 - 3,500 د.ل",
        posted: "منذ يومين",
        featured: true,
        applicants: 31,
        logo: "RV",
        color: "pink",
        skills: ["Marketing", "Meta Ads", "Analytics"],
        description:
            "إدارة الحملات الرقمية ووسائل التواصل الاجتماعي وتحليل أداء الحملات."
    }
];

const categories = [
    "الكل",
    "البرمجة والتقنية",
    "المحاسبة والمالية",
    "التصميم",
    "الهندسة",
    "الموارد البشرية",
    "التسويق"
];

const cities = [
    "كل المدن",
    "طرابلس",
    "بنغازي",
    "بني وليد",
    "الزاوية"
];

const applicantsData = [
    {
        id: 1,
        name: "إبراهيم رمضان",
        title: "Front-End Developer",
        city: "بني وليد",
        experience: "3 سنوات",
        skills: ["React", "JavaScript", "CSS", "Git"],
        education: "هندسة البرمجيات",
        university: "جامعة بني وليد",
        status: "قيد المراجعة",
        email: "ibrahim@example.com",
        phone: "0940000000",
        bio: "مطور واجهات أمامية مهتم ببناء تطبيقات ويب حديثة وتجارب مستخدم احترافية."
    },
    {
        id: 2,
        name: "محمد علي",
        title: "Full Stack Developer",
        city: "طرابلس",
        experience: "4 سنوات",
        skills: ["React", "Node.js", "MySQL", "Express"],
        education: "علوم الحاسوب",
        university: "جامعة طرابلس",
        status: "مقابلة",
        email: "mohamed@example.com",
        phone: "0910000000",
        bio: "مطور Full Stack لديه خبرة في بناء أنظمة الويب وقواعد البيانات."
    },
    {
        id: 3,
        name: "أحمد سالم",
        title: "UI/UX Designer",
        city: "بنغازي",
        experience: "2 سنوات",
        skills: ["Figma", "UI", "UX", "Prototyping"],
        education: "تصميم جرافيك",
        university: "جامعة بنغازي",
        status: "جديد",
        email: "ahmed@example.com",
        phone: "0920000000",
        bio: "مصمم UI/UX يهتم بالتفاصيل وبناء واجهات سهلة الاستخدام."
    }
];

function App() {
    const [page, setPage] = useState("home");

    const [jobs, setJobs] = useState(jobsData);
    const [applicants, setApplicants] = useState(applicantsData);

    const [search, setSearch] = useState("");
    const [city, setCity] = useState("كل المدن");
    const [category, setCategory] = useState("الكل");
    const [type, setType] = useState("الكل");

    const [selectedJob, setSelectedJob] = useState(null);
    const [selectedApplicant, setSelectedApplicant] = useState(null);

    const [savedJobs, setSavedJobs] = useState([]);
    const [applications, setApplications] = useState([]);

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showApply, setShowApply] = useState(false);
    const [showCreateJob, setShowCreateJob] = useState(false);

    const [authType, setAuthType] = useState("applicant");
    const [loggedIn, setLoggedIn] = useState(false);
    const [userType, setUserType] = useState("applicant");

    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const [toast, setToast] = useState(null);

    const [profile, setProfile] = useState({
        name: "إبراهيم رمضان",
        title: "Front-End Developer",
        city: "بني وليد",
        phone: "0940000000",
        email: "ibrahim@example.com",
        bio: "مطور واجهات أمامية مهتم ببناء تطبيقات ويب حديثة.",
        university: "جامعة بني وليد",
        education: "هندسة البرمجيات",
        experience: "3 سنوات",
        skills: ["React", "JavaScript", "CSS", "Git"]
    });

    const [newJob, setNewJob] = useState({
        title: "",
        category: "البرمجة والتقنية",
        city: "طرابلس",
        type: "دوام كامل",
        experience: "",
        salary: "",
        description: "",
        skills: ""
    });

    const showToast = (message, type = "success") => {
        setToast({ message, type });

        setTimeout(() => {
            setToast(null);
        }, 3000);
    };

    const filteredJobs = useMemo(() => {
        return jobs.filter((job) => {
            const searchMatch =
                job.title.toLowerCase().includes(search.toLowerCase()) ||
                job.company.toLowerCase().includes(search.toLowerCase()) ||
                job.skills.some((skill) =>
                    skill.toLowerCase().includes(search.toLowerCase())
                );

            const cityMatch =
                city === "كل المدن" || job.city === city;

            const categoryMatch =
                category === "الكل" || job.category === category;

            const typeMatch =
                type === "الكل" || job.type === type;

            return (
                searchMatch &&
                cityMatch &&
                categoryMatch &&
                typeMatch
            );
        });
    }, [jobs, search, city, category, type]);

    const navigate = (target) => {
        setPage(target);
        setMobileMenu(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const toggleSave = (id) => {
        setSavedJobs((previous) => {
            if (previous.includes(id)) {
                showToast("تمت إزالة الوظيفة من المحفوظات", "info");

                return previous.filter(
                    (jobId) => jobId !== id
                );
            }

            showToast("تم حفظ الوظيفة");

            return [...previous, id];
        });
    };

    const handleLogin = (event) => {
        event.preventDefault();

        setLoggedIn(true);
        setUserType(authType);
        setShowLogin(false);

        if (authType === "company") {
            navigate("company");
        } else {
            navigate("dashboard");
        }

        showToast("تم تسجيل الدخول بنجاح");
    };

    const handleRegister = (event) => {
        event.preventDefault();

        setLoggedIn(true);
        setUserType(authType);
        setShowRegister(false);

        if (authType === "company") {
            navigate("company");
        } else {
            navigate("dashboard");
        }

        showToast("تم إنشاء الحساب بنجاح");
    };

    const handleApply = (event) => {
        event.preventDefault();

        if (!loggedIn) {
            setShowApply(false);
            setShowLogin(true);
            showToast("يجب تسجيل الدخول أولاً", "info");
            return;
        }

        setApplications((previous) => [
            ...previous,
            {
                id: Date.now(),
                jobId: selectedJob.id,
                title: selectedJob.title,
                company: selectedJob.company,
                status: "قيد المراجعة"
            }
        ]);

        setShowApply(false);
        setSelectedJob(null);

        showToast("تم إرسال طلب التقديم بنجاح");
    };

    const handleCreateJob = (event) => {
        event.preventDefault();

        const job = {
            id: Date.now(),
            title: newJob.title,
            company: "شركة التقنية الليبية",
            city: newJob.city,
            category: newJob.category,
            type: newJob.type,
            experience: newJob.experience,
            salary: newJob.salary,
            description: newJob.description,
            skills: newJob.skills
                .split(",")
                .map((skill) => skill.trim())
                .filter(Boolean),
            posted: "الآن",
            featured: false,
            applicants: 0,
            logo: "LT",
            color: "blue"
        };

        setJobs((previous) => [job, ...previous]);

        setNewJob({
            title: "",
            category: "البرمجة والتقنية",
            city: "طرابلس",
            type: "دوام كامل",
            experience: "",
            salary: "",
            description: "",
            skills: ""
        });

        setShowCreateJob(false);

        showToast("تم نشر الوظيفة بنجاح");
    };

    const updateApplicantStatus = (id, status) => {
        setApplicants((previous) =>
            previous.map((applicant) =>
                applicant.id === id
                    ? { ...applicant, status }
                    : applicant
            )
        );

        setSelectedApplicant((previous) =>
            previous
                ? {
                    ...previous,
                    status
                }
                : previous
        );

        showToast(`تم تغيير حالة المتقدم إلى ${status}`);
    };

    const logout = () => {
        setLoggedIn(false);
        setUserType("applicant");
        navigate("home");
        showToast("تم تسجيل الخروج", "info");
    };

    return (
        <div className={darkMode ? "app dark" : "app"}>
            <header className="header">
                <div className="header-inner">
                    <button
                        className="mobile-menu-button"
                        onClick={() =>
                            setMobileMenu(!mobileMenu)
                        }
                    >
                        {mobileMenu ? <FiX /> : <FiMenu />}
                    </button>

                    <button
                        className="logo"
                        onClick={() => navigate("home")}
                    >
                        <span className="logo-icon">
                            <FiBriefcase />
                        </span>

                        <span>
                            <strong>مسار ليبيا</strong>
                            <small>منصة التوظيف الذكية</small>
                        </span>
                    </button>

                    <nav className={mobileMenu ? "nav open" : "nav"}>
                        <button
                            className={
                                page === "home" ? "active" : ""
                            }
                            onClick={() => navigate("home")}
                        >
                            <FiHome />
                            الرئيسية
                        </button>

                        <button
                            className={
                                page === "jobs" ? "active" : ""
                            }
                            onClick={() => navigate("jobs")}
                        >
                            <FiBriefcase />
                            الوظائف
                        </button>

                        <button
                            className={
                                page === "companies" ? "active" : ""
                            }
                            onClick={() => navigate("companies")}
                        >
                            <FiUsers />
                            الشركات
                        </button>

                        <button
                            className={
                                page === "how" ? "active" : ""
                            }
                            onClick={() => navigate("how")}
                        >
                            <FiLayers />
                            كيف تعمل؟
                        </button>
                    </nav>

                    <div className="header-actions">
                        <button
                            className="theme-button"
                            onClick={() =>
                                setDarkMode(!darkMode)
                            }
                        >
                            {darkMode ? <FiSun /> : <FiMoon />}
                        </button>

                        {loggedIn ? (
                            <>
                                <button
                                    className="notification-button"
                                    onClick={() =>
                                        showToast(
                                            "لديك 3 إشعارات جديدة",
                                            "info"
                                        )
                                    }
                                >
                                    <FiBell />
                                    <span />
                                </button>

                                <button
                                    className="profile-button"
                                    onClick={() =>
                                        navigate(
                                            userType ===
                                                "company"
                                                ? "company"
                                                : "dashboard"
                                        )
                                    }
                                >
                                    <span className="user-avatar">
                                        {userType === "company"
                                            ? "ش"
                                            : "إ"}
                                    </span>

                                    <span>
                                        <strong>
                                            {userType ===
                                            "company"
                                                ? "شركة التقنية"
                                                : "إبراهيم"}
                                        </strong>
                                        <small>
                                            {userType ===
                                            "company"
                                                ? "حساب شركة"
                                                : "باحث عن عمل"}
                                        </small>
                                    </span>

                                    <FiChevronDown />
                                </button>
                            </>
                        ) : (
                            <div className="auth-buttons">
                                <button
                                    className="login-button"
                                    onClick={() =>
                                        setShowLogin(true)
                                    }
                                >
                                    تسجيل الدخول
                                </button>

                                <button
                                    className="register-button"
                                    onClick={() =>
                                        setShowRegister(true)
                                    }
                                >
                                    إنشاء حساب
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {page === "home" && (
                <Home
                    navigate={navigate}
                    search={search}
                    setSearch={setSearch}
                    city={city}
                    setCity={setCity}
                    filteredJobs={filteredJobs}
                    setSelectedJob={setSelectedJob}
                    toggleSave={toggleSave}
                    savedJobs={savedJobs}
                />
            )}

            {page === "jobs" && (
                <JobsPage
                    search={search}
                    setSearch={setSearch}
                    city={city}
                    setCity={setCity}
                    category={category}
                    setCategory={setCategory}
                    type={type}
                    setType={setType}
                    filteredJobs={filteredJobs}
                    setSelectedJob={setSelectedJob}
                    toggleSave={toggleSave}
                    savedJobs={savedJobs}
                />
            )}

            {page === "companies" && (
                <CompaniesPage navigate={navigate} />
            )}

            {page === "how" && <HowPage />}

            {page === "dashboard" && (
                <ApplicantDashboard
                    profile={profile}
                    setProfile={setProfile}
                    applications={applications}
                    navigate={navigate}
                    savedJobs={savedJobs}
                    jobs={jobs}
                />
            )}

            {page === "company" && (
                <CompanyDashboard
                    jobs={jobs}
                    applicants={applicants}
                    setSelectedApplicant={
                        setSelectedApplicant
                    }
                    setShowCreateJob={setShowCreateJob}
                    navigate={navigate}
                />
            )}

            <footer className="footer">
                <div className="footer-main">
                    <div className="footer-brand">
                        <div className="logo-icon">
                            <FiBriefcase />
                        </div>

                        <div>
                            <strong>مسار ليبيا</strong>
                            <span>
                                نربط الكفاءات الليبية بفرص حقيقية.
                            </span>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div>
                            <strong>المنصة</strong>
                            <button onClick={() => navigate("jobs")}>
                                الوظائف
                            </button>
                            <button
                                onClick={() =>
                                    navigate("companies")
                                }
                            >
                                الشركات
                            </button>
                        </div>

                        <div>
                            <strong>للباحثين</strong>
                            <button
                                onClick={() =>
                                    navigate("dashboard")
                                }
                            >
                                الملف المهني
                            </button>
                            <button
                                onClick={() =>
                                    navigate("jobs")
                                }
                            >
                                البحث عن وظيفة
                            </button>
                        </div>

                        <div>
                            <strong>للشركات</strong>
                            <button
                                onClick={() =>
                                    setShowRegister(true)
                                }
                            >
                                إنشاء حساب شركة
                            </button>
                            <button
                                onClick={() =>
                                    setShowLogin(true)
                                }
                            >
                                دخول الشركات
                            </button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>
                        © 2026 مسار ليبيا — جميع الحقوق محفوظة
                    </span>

                    <span>
                        منصة تجريبية قابلة للربط بقاعدة بيانات
                    </span>
                </div>
            </footer>

            {selectedJob && !showApply && (
                <JobModal
                    job={selectedJob}
                    close={() => setSelectedJob(null)}
                    apply={() => setShowApply(true)}
                    saved={savedJobs.includes(selectedJob.id)}
                    toggleSave={toggleSave}
                />
            )}

            {showApply && selectedJob && (
                <ApplyModal
                    job={selectedJob}
                    close={() => setShowApply(false)}
                    submit={handleApply}
                />
            )}

            {showLogin && (
                <AuthModal
                    title="تسجيل الدخول"
                    authType={authType}
                    setAuthType={setAuthType}
                    close={() => setShowLogin(false)}
                    submit={handleLogin}
                />
            )}

            {showRegister && (
                <AuthModal
                    title="إنشاء حساب جديد"
                    authType={authType}
                    setAuthType={setAuthType}
                    close={() => setShowRegister(false)}
                    submit={handleRegister}
                    register
                />
            )}

            {showCreateJob && (
                <CreateJobModal
                    job={newJob}
                    setJob={setNewJob}
                    close={() => setShowCreateJob(false)}
                    submit={handleCreateJob}
                />
            )}

            {selectedApplicant && (
                <ApplicantModal
                    applicant={selectedApplicant}
                    close={() =>
                        setSelectedApplicant(null)
                    }
                    updateStatus={updateApplicantStatus}
                />
            )}

            {toast && (
                <div className={`toast ${toast.type}`}>
                    <div className="toast-icon">
                        {toast.type === "info" ? (
                            <FiActivity />
                        ) : (
                            <FiCheckCircle />
                        )}
                    </div>

                    <span>{toast.message}</span>

                    <button
                        onClick={() => setToast(null)}
                    >
                        <FiX />
                    </button>
                </div>
            )}
        </div>
    );
}

/* =========================
   HOME
========================= */

function Home({
    navigate,
    search,
    setSearch,
    city,
    setCity,
    filteredJobs,
    setSelectedJob,
    toggleSave,
    savedJobs
}) {
    return (
        <main>
            <section className="hero">
                <div className="hero-background">
                    <div className="hero-circle one" />
                    <div className="hero-circle two" />
                    <div className="hero-circle three" />
                </div>

                <div className="container hero-content">
                    <div className="hero-text">
                        <span className="hero-badge">
                            <FiActivity />
                            مستقبل العمل في ليبيا يبدأ هنا
                        </span>

                        <h1>
                            ابنِ مستقبلك
                            <br />
                            <span>المهني في ليبيا</span>
                        </h1>

                        <p>
                            منصة متكاملة تجمع الباحثين عن العمل
                            بالشركات والمؤسسات، وتمنحك الأدوات
                            لبناء ملف مهني احترافي والوصول إلى
                            الفرص المناسبة لك.
                        </p>

                        <div className="hero-search">
                            <div>
                                <FiSearch />

                                <input
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(
                                            e.target.value
                                        )
                                    }
                                    placeholder="المسمى الوظيفي أو المهارة"
                                />
                            </div>

                            <div>
                                <FiMapPin />

                                <select
                                    value={city}
                                    onChange={(e) =>
                                        setCity(
                                            e.target.value
                                        )
                                    }
                                >
                                    {cities.map((item) => (
                                        <option key={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button
                                onClick={() =>
                                    navigate("jobs")
                                }
                            >
                                بحث
                                <FiArrowLeft />
                            </button>
                        </div>

                        <div className="hero-popular">
                            <span>الأكثر بحثًا:</span>

                            <button
                                onClick={() =>
                                    setSearch("React")
                                }
                            >
                                React
                            </button>

                            <button
                                onClick={() =>
                                    setSearch("محاسب")
                                }
                            >
                                محاسب
                            </button>

                            <button
                                onClick={() =>
                                    setSearch("مهندس")
                                }
                            >
                                مهندس
                            </button>

                            <button
                                onClick={() =>
                                    setSearch("مصمم")
                                }
                            >
                                مصمم
                            </button>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="visual-main">
                            <div className="visual-icon">
                                <FiBriefcase />
                            </div>

                            <strong>فرصتك القادمة</strong>

                            <span>
                                أكثر من 1,284 وظيفة متاحة
                            </span>

                            <div className="visual-progress">
                                <span />
                            </div>

                            <small>
                                <FiCheckCircle />
                                فرص جديدة يوميًا
                            </small>
                        </div>

                        <div className="visual-floating top">
                            <div>
                                <FiUsers />
                            </div>

                            <span>
                                <strong>8,540+</strong>
                                باحث عن عمل
                            </span>
                        </div>

                        <div className="visual-floating bottom">
                            <div>
                                <FiBriefcase />
                            </div>

                            <span>
                                <strong>486</strong>
                                شركة مسجلة
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container numbers">
                <div>
                    <FiBriefcase />
                    <strong>1,284</strong>
                    <span>وظيفة متاحة</span>
                </div>

                <div>
                    <FiUsers />
                    <strong>486</strong>
                    <span>شركة مسجلة</span>
                </div>

                <div>
                    <FiUser />
                    <strong>8,540+</strong>
                    <span>باحث عن عمل</span>
                </div>

                <div>
                    <FiCheckCircle />
                    <strong>3,218</strong>
                    <span>عملية توظيف</span>
                </div>
            </section>

            <section className="container home-section">
                <div className="section-title-row">
                    <div>
                        <span>فرص جديدة</span>
                        <h2>وظائف مميزة</h2>
                        <p>
                            اكتشف أحدث الفرص المنشورة على المنصة
                        </p>
                    </div>

                    <button
                        className="outline-button"
                        onClick={() => navigate("jobs")}
                    >
                        مشاهدة جميع الوظائف
                        <FiArrowLeft />
                    </button>
                </div>

                <div className="job-grid">
                    {filteredJobs.slice(0, 3).map((job) => (
                        <JobCard
                            key={job.id}
                            job={job}
                            setSelectedJob={
                                setSelectedJob
                            }
                            toggleSave={toggleSave}
                            saved={savedJobs.includes(
                                job.id
                            )}
                        />
                    ))}
                </div>
            </section>

            <section className="career-section">
                <div className="container career-inner">
                    <div>
                        <span className="section-label">
                            للباحثين عن عمل
                        </span>

                        <h2>
                            لا تبحث عن وظيفة فقط،
                            <br />
                            <strong>ابنِ مسارك المهني.</strong>
                        </h2>

                        <p>
                            أنشئ ملفك المهني مرة واحدة،
                            وأضف خبراتك ومهاراتك وتعليمك،
                            ودع الشركات تكتشفك.
                        </p>

                        <button
                            className="gold-button"
                            onClick={() =>
                                navigate("dashboard")
                            }
                        >
                            بناء ملفي المهني
                            <FiArrowLeft />
                        </button>
                    </div>

                    <div className="profile-preview">
                        <div className="preview-head">
                            <div className="preview-avatar">
                                إ
                            </div>

                            <div>
                                <strong>
                                    إبراهيم رمضان
                                </strong>

                                <span>
                                    Front-End Developer
                                </span>
                            </div>

                            <FiCheckCircle />
                        </div>

                        <div className="preview-line">
                            <span>المهارات</span>

                            <div>
                                <b>React</b>
                                <b>JavaScript</b>
                                <b>CSS</b>
                            </div>
                        </div>

                        <div className="preview-line">
                            <span>الخبرة</span>
                            <strong>3 سنوات</strong>
                        </div>

                        <div className="profile-complete">
                            <div>
                                <span>
                                    اكتمال الملف
                                </span>

                                <strong>82%</strong>
                            </div>

                            <div>
                                <span />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

/* =========================
   JOBS PAGE
========================= */

function JobsPage({
    search,
    setSearch,
    city,
    setCity,
    category,
    setCategory,
    type,
    setType,
    filteredJobs,
    setSelectedJob,
    toggleSave,
    savedJobs
}) {
    return (
        <main className="page">
            <div className="container">
                <div className="page-heading">
                    <div>
                        <span>اكتشف الفرص</span>
                        <h1>جميع الوظائف</h1>
                        <p>
                            ابحث عن الوظيفة المناسبة لمسارك
                            المهني.
                        </p>
                    </div>

                    <div className="result-badge">
                        <FiBriefcase />
                        {filteredJobs.length} وظيفة
                    </div>
                </div>

                <div className="jobs-search-box">
                    <div>
                        <FiSearch />
                        <input
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            placeholder="ابحث عن المسمى الوظيفي أو الشركة أو المهارة"
                        />
                    </div>

                    <div>
                        <FiMapPin />
                        <select
                            value={city}
                            onChange={(e) =>
                                setCity(e.target.value)
                            }
                        >
                            {cities.map((item) => (
                                <option key={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="jobs-filters">
                    <div className="filter-icon">
                        <FiFilter />
                    </div>

                    {categories.map((item) => (
                        <button
                            className={
                                category === item
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                setCategory(item)
                            }
                            key={item}
                        >
                            {item}
                        </button>
                    ))}

                    <select
                        value={type}
                        onChange={(e) =>
                            setType(e.target.value)
                        }
                    >
                        <option>الكل</option>
                        <option>دوام كامل</option>
                        <option>عن بعد</option>
                    </select>
                </div>

                <div className="job-grid large">
                    {filteredJobs.map((job) => (
                        <JobCard
                            key={job.id}
                            job={job}
                            setSelectedJob={
                                setSelectedJob
                            }
                            toggleSave={toggleSave}
                            saved={savedJobs.includes(
                                job.id
                            )}
                        />
                    ))}
                </div>

                {filteredJobs.length === 0 && (
                    <div className="empty">
                        <FiSearch />

                        <h2>لم نجد نتائج</h2>

                        <p>
                            جرّب تغيير كلمات البحث أو
                            الفلاتر.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}

/* =========================
   JOB CARD
========================= */

function JobCard({
    job,
    setSelectedJob,
    toggleSave,
    saved
}) {
    return (
        <article className="job-card">
            {job.featured && (
                <span className="featured-label">
                    <FiStar />
                    مميزة
                </span>
            )}

            <div className="job-card-top">
                <div
                    className={`company-logo ${job.color}`}
                >
                    {job.logo}
                </div>

                <button
                    className={
                        saved
                            ? "save-button saved"
                            : "save-button"
                    }
                    onClick={() =>
                        toggleSave(job.id)
                    }
                >
                    {saved ? <FiBookmark /> : <FiHeart />}
                </button>
            </div>

            <div className="job-card-content">
                <span className="company-name">
                    {job.company}
                </span>

                <h3>{job.title}</h3>

                <div className="job-place">
                    <FiMapPin />
                    {job.city}
                </div>

                <div className="job-card-tags">
                    <span>
                        <FiBriefcase />
                        {job.type}
                    </span>

                    <span>
                        <FiClock />
                        {job.experience}
                    </span>
                </div>
            </div>

            <div className="job-card-bottom">
                <div>
                    <small>الراتب</small>

                    <strong>
                        <FiDollarSign />
                        {job.salary}
                    </strong>
                </div>

                <button
                    onClick={() =>
                        setSelectedJob(job)
                    }
                >
                    عرض التفاصيل
                    <FiArrowLeft />
                </button>
            </div>

            <div className="job-card-date">
                <span>{job.posted}</span>
                <span>
                    {job.applicants} متقدم
                </span>
            </div>
        </article>
    );
}

/* =========================
   COMPANIES
========================= */

function CompaniesPage() {
    const companies = [
        {
            name: "شركة التقنية الليبية",
            sector: "التقنية والبرمجيات",
            city: "طرابلس",
            jobs: 24,
            logo: "LT",
            color: "blue"
        },
        {
            name: "مجموعة النخبة التجارية",
            sector: "التجارة والاستثمار",
            city: "بنغازي",
            jobs: 17,
            logo: "EN",
            color: "gold"
        },
        {
            name: "شركة ليبيا للمقاولات",
            sector: "المقاولات والهندسة",
            city: "بني وليد",
            jobs: 12,
            logo: "LC",
            color: "green"
        },
        {
            name: "وكالة رؤية للتسويق",
            sector: "التسويق والإعلام",
            city: "طرابلس",
            jobs: 9,
            logo: "RV",
            color: "pink"
        }
    ];

    return (
        <main className="page">
            <div className="container">
                <div className="page-heading">
                    <div>
                        <span>شركاؤنا</span>
                        <h1>الشركات المسجلة</h1>
                        <p>
                            تعرف على الشركات التي تبحث عن
                            الكفاءات الليبية.
                        </p>
                    </div>
                </div>

                <div className="companies-grid">
                    {companies.map((company) => (
                        <article
                            className="company-card"
                            key={company.name}
                        >
                            <div
                                className={`company-logo large ${company.color}`}
                            >
                                {company.logo}
                            </div>

                            <h3>{company.name}</h3>

                            <span>
                                {company.sector}
                            </span>

                            <div className="company-city">
                                <FiMapPin />
                                {company.city}
                            </div>

                            <div className="company-footer">
                                <span>
                                    <strong>
                                        {company.jobs}
                                    </strong>
                                    وظيفة مفتوحة
                                </span>

                                <button>
                                    استكشف
                                    <FiArrowLeft />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}

/* =========================
   HOW
========================= */

function HowPage() {
    const steps = [
        {
            number: "01",
            icon: <FiUser />,
            title: "أنشئ حسابك",
            text: "سجل كباحث عن عمل أو كشركة."
        },
        {
            number: "02",
            icon: <FiFileText />,
            title: "ابنِ ملفك",
            text: "أضف التعليم والخبرات والمهارات."
        },
        {
            number: "03",
            icon: <FiSearch />,
            title: "اكتشف الفرص",
            text: "ابحث عن الوظائف المناسبة."
        },
        {
            number: "04",
            icon: <FiSend />,
            title: "قدم طلبك",
            text: "أرسل طلب التوظيف وتابع حالته."
        }
    ];

    return (
        <main className="page">
            <div className="container">
                <div className="how-hero">
                    <span>كيف تعمل المنصة؟</span>

                    <h1>
                        طريقك من البحث
                        <br />
                        <strong>إلى الوظيفة يبدأ هنا</strong>
                    </h1>

                    <p>
                        صممنا مسار ليبيا ليكون بسيطًا
                        للباحث عن العمل وقويًا للشركات.
                    </p>
                </div>

                <div className="steps-grid">
                    {steps.map((step) => (
                        <article
                            className="step-card"
                            key={step.number}
                        >
                            <span>{step.number}</span>

                            <div>{step.icon}</div>

                            <h3>{step.title}</h3>

                            <p>{step.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}

/* =========================
   APPLICANT DASHBOARD
========================= */

function ApplicantDashboard({
    profile,
    setProfile,
    applications,
    navigate,
    savedJobs,
    jobs
}) {
    const [tab, setTab] = useState("profile");

    const updateProfile = (field, value) => {
        setProfile((previous) => ({
            ...previous,
            [field]: value
        }));
    };

    return (
        <main className="dashboard-page">
            <div className="container">
                <div className="dashboard-welcome">
                    <div>
                        <span>لوحة الباحث عن عمل</span>

                        <h1>
                            مرحبًا، {profile.name.split(" ")[0]} 👋
                        </h1>

                        <p>
                            حافظ على تحديث ملفك لتزيد فرص
                            وصول الشركات إليك.
                        </p>
                    </div>

                    <button
                        className="primary-button"
                        onClick={() => navigate("jobs")}
                    >
                        <FiSearch />
                        اكتشف الوظائف
                    </button>
                </div>

                <div className="profile-completion-card">
                    <div className="completion-icon">
                        <FiActivity />
                    </div>

                    <div className="completion-info">
                        <div>
                            <strong>
                                اكتمال ملفك المهني
                            </strong>

                            <span>82%</span>
                        </div>

                        <div className="completion-bar">
                            <span />
                        </div>

                        <small>
                            أضف السيرة الذاتية وصورة شخصية
                            لإكمال الملف.
                        </small>
                    </div>

                    <button>
                        <FiEdit3 />
                        تحديث الملف
                    </button>
                </div>

                <div className="dashboard-layout">
                    <div className="dashboard-menu">
                        <button
                            className={
                                tab === "profile"
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                setTab("profile")
                            }
                        >
                            <FiUser />
                            الملف المهني
                        </button>

                        <button
                            className={
                                tab === "applications"
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                setTab("applications")
                            }
                        >
                            <FiFileText />
                            طلبات التقديم
                            <b>{applications.length}</b>
                        </button>

                        <button
                            className={
                                tab === "saved"
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                setTab("saved")
                            }
                        >
                            <FiBookmark />
                            المحفوظات
                            <b>{savedJobs.length}</b>
                        </button>
                    </div>

                    <div className="dashboard-content">
                        {tab === "profile" && (
                            <div className="profile-editor">
                                <div className="editor-heading">
                                    <div>
                                        <span>
                                            الملف المهني
                                        </span>

                                        <h2>
                                            معلوماتي المهنية
                                        </h2>
                                    </div>

                                    <button>
                                        <FiEye />
                                        معاينة CV
                                    </button>
                                </div>

                                <div className="personal-card">
                                    <div className="profile-avatar-large">
                                        إ
                                        <button>
                                            <FiEdit3 />
                                        </button>
                                    </div>

                                    <div>
                                        <h3>
                                            {profile.name}
                                        </h3>

                                        <p>
                                            {profile.title}
                                        </p>

                                        <span>
                                            <FiMapPin />
                                            {profile.city}
                                        </span>
                                    </div>
                                </div>

                                <div className="form-section">
                                    <div className="form-section-title">
                                        <FiUser />
                                        <div>
                                            <h3>
                                                المعلومات
                                                الشخصية
                                            </h3>
                                            <span>
                                                بياناتك
                                                الأساسية
                                            </span>
                                        </div>
                                    </div>

                                    <div className="profile-form-grid">
                                        <Input
                                            label="الاسم الكامل"
                                            value={
                                                profile.name
                                            }
                                            onChange={(value) =>
                                                updateProfile(
                                                    "name",
                                                    value
                                                )
                                            }
                                        />

                                        <Input
                                            label="المسمى المهني"
                                            value={
                                                profile.title
                                            }
                                            onChange={(value) =>
                                                updateProfile(
                                                    "title",
                                                    value
                                                )
                                            }
                                        />

                                        <Input
                                            label="رقم الهاتف"
                                            value={
                                                profile.phone
                                            }
                                            onChange={(value) =>
                                                updateProfile(
                                                    "phone",
                                                    value
                                                )
                                            }
                                        />

                                        <Input
                                            label="البريد الإلكتروني"
                                            value={
                                                profile.email
                                            }
                                            onChange={(value) =>
                                                updateProfile(
                                                    "email",
                                                    value
                                                )
                                            }
                                        />

                                        <Input
                                            label="المدينة"
                                            value={
                                                profile.city
                                            }
                                            onChange={(value) =>
                                                updateProfile(
                                                    "city",
                                                    value
                                                )
                                            }
                                        />

                                        <Input
                                            label="سنوات الخبرة"
                                            value={
                                                profile.experience
                                            }
                                            onChange={(value) =>
                                                updateProfile(
                                                    "experience",
                                                    value
                                                )
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="form-section">
                                    <div className="form-section-title">
                                        <FiFileText />
                                        <div>
                                            <h3>
                                                التعليم
                                            </h3>

                                            <span>
                                                مؤهلاتك
                                                الأكاديمية
                                            </span>
                                        </div>
                                    </div>

                                    <div className="profile-form-grid">
                                        <Input
                                            label="الجامعة"
                                            value={
                                                profile.university
                                            }
                                            onChange={(value) =>
                                                updateProfile(
                                                    "university",
                                                    value
                                                )
                                            }
                                        />

                                        <Input
                                            label="التخصص"
                                            value={
                                                profile.education
                                            }
                                            onChange={(value) =>
                                                updateProfile(
                                                    "education",
                                                    value
                                                )
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="form-section">
                                    <div className="form-section-title">
                                        <FiLayers />
                                        <div>
                                            <h3>
                                                المهارات
                                            </h3>

                                            <span>
                                                المهارات التي
                                                تمتلكها
                                            </span>
                                        </div>
                                    </div>

                                    <div className="skills-editor">
                                        {profile.skills.map(
                                            (skill) => (
                                                <span key={skill}>
                                                    {skill}
                                                    <button
                                                        onClick={() =>
                                                            setProfile(
                                                                (
                                                                    previous
                                                                ) => ({
                                                                    ...previous,
                                                                    skills: previous.skills.filter(
                                                                        (
                                                                            item
                                                                        ) =>
                                                                            item !==
                                                                            skill
                                                                    )
                                                                })
                                                            )
                                                        }
                                                    >
                                                        <FiX />
                                                    </button>
                                                </span>
                                            )
                                        )}

                                        <button
                                            onClick={() =>
                                                setProfile(
                                                    (
                                                        previous
                                                    ) => ({
                                                        ...previous,
                                                        skills: [
                                                            ...previous.skills,
                                                            "New Skill"
                                                        ]
                                                    })
                                                )
                                            }
                                        >
                                            <FiPlus />
                                            إضافة مهارة
                                        </button>
                                    </div>
                                </div>

                                <div className="form-section">
                                    <div className="form-section-title">
                                        <FiUpload />
                                        <div>
                                            <h3>
                                                السيرة الذاتية
                                            </h3>

                                            <span>
                                                ارفع CV
                                                الخاص بك
                                            </span>
                                        </div>
                                    </div>

                                    <div className="cv-upload">
                                        <div>
                                            <FiFileText />
                                        </div>

                                        <section>
                                            <strong>
                                                إبراهيم رمضان
                                                - CV.pdf
                                            </strong>

                                            <span>
                                                آخر تحديث:
                                                اليوم
                                            </span>
                                        </section>

                                        <button>
                                            <FiUpload />
                                            تغيير الملف
                                        </button>
                                    </div>
                                </div>

                                <button
                                    className="save-profile"
                                    onClick={() =>
                                        alert(
                                            "تم حفظ الملف المهني"
                                        )
                                    }
                                >
                                    <FiCheck />
                                    حفظ التغييرات
                                </button>
                            </div>
                        )}

                        {tab === "applications" && (
                            <div className="applications-view">
                                <div className="editor-heading">
                                    <div>
                                        <span>
                                            متابعة الطلبات
                                        </span>

                                        <h2>
                                            طلبات التقديم
                                        </h2>
                                    </div>
                                </div>

                                {applications.length ===
                                0 ? (
                                    <div className="empty dashboard-empty">
                                        <FiFileText />

                                        <h2>
                                            لا توجد طلبات
                                        </h2>

                                        <p>
                                            ابدأ بالتقديم على
                                            الوظائف المناسبة
                                            لك.
                                        </p>
                                    </div>
                                ) : (
                                    applications.map(
                                        (application) => (
                                            <div
                                                className="application-row"
                                                key={
                                                    application.id
                                                }
                                            >
                                                <div className="application-logo">
                                                    <FiBriefcase />
                                                </div>

                                                <div>
                                                    <strong>
                                                        {
                                                            application.title
                                                        }
                                                    </strong>

                                                    <span>
                                                        {
                                                            application.company
                                                        }
                                                    </span>
                                                </div>

                                                <div className="application-status">
                                                    <FiClock />
                                                    {
                                                        application.status
                                                    }
                                                </div>

                                                <FiArrowLeft />
                                            </div>
                                        )
                                    )
                                )}
                            </div>
                        )}

                        {tab === "saved" && (
                            <div>
                                <div className="editor-heading">
                                    <div>
                                        <span>
                                            وظائفك المحفوظة
                                        </span>

                                        <h2>
                                            المحفوظات
                                        </h2>
                                    </div>
                                </div>

                                {jobs
                                    .filter((job) =>
                                        savedJobs.includes(
                                            job.id
                                        )
                                    )
                                    .map((job) => (
                                        <div
                                            className="application-row"
                                            key={job.id}
                                        >
                                            <div
                                                className={`company-logo ${job.color}`}
                                            >
                                                {job.logo}
                                            </div>

                                            <div>
                                                <strong>
                                                    {
                                                        job.title
                                                    }
                                                </strong>

                                                <span>
                                                    {
                                                        job.company
                                                    }
                                                </span>
                                            </div>

                                            <span>
                                                {job.city}
                                            </span>

                                            <FiBookmark />
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

/* =========================
   COMPANY DASHBOARD
========================= */

function CompanyDashboard({
    jobs,
    applicants,
    setSelectedApplicant,
    setShowCreateJob
}) {
    return (
        <main className="dashboard-page">
            <div className="container">
                <div className="dashboard-welcome">
                    <div>
                        <span>
                            لوحة إدارة الشركة
                        </span>

                        <h1>
                            مرحبًا، شركة التقنية الليبية
                        </h1>

                        <p>
                            أدر وظائفك واكتشف الكفاءات
                            المناسبة لفريقك.
                        </p>
                    </div>

                    <button
                        className="primary-button"
                        onClick={() =>
                            setShowCreateJob(true)
                        }
                    >
                        <FiPlus />
                        نشر وظيفة
                    </button>
                </div>

                <div className="company-stats">
                    <DashboardStat
                        icon={<FiBriefcase />}
                        title="الوظائف المنشورة"
                        value={jobs.length}
                    />

                    <DashboardStat
                        icon={<FiUsers />}
                        title="إجمالي المتقدمين"
                        value="184"
                    />

                    <DashboardStat
                        icon={<FiCalendar />}
                        title="المقابلات"
                        value="26"
                    />

                    <DashboardStat
                        icon={<FiCheckCircle />}
                        title="تم التوظيف"
                        value="8"
                    />
                </div>

                <div className="company-layout">
                    <section className="company-main-card">
                        <div className="editor-heading">
                            <div>
                                <span>
                                    إدارة المواهب
                                </span>

                                <h2>
                                    أحدث المتقدمين
                                </h2>
                            </div>

                            <button>
                                عرض الكل
                                <FiArrowLeft />
                            </button>
                        </div>

                        <div className="applicant-table-head">
                            <span>المتقدم</span>
                            <span>الخبرة</span>
                            <span>المهارات</span>
                            <span>الحالة</span>
                            <span />
                        </div>

                        {applicants.map((applicant) => (
                            <div
                                className="applicant-row"
                                key={applicant.id}
                            >
                                <div className="applicant-person">
                                    <div>
                                        {applicant.name.charAt(
                                            0
                                        )}
                                    </div>

                                    <span>
                                        <strong>
                                            {
                                                applicant.name
                                            }
                                        </strong>

                                        <small>
                                            {
                                                applicant.title
                                            }
                                        </small>
                                    </span>
                                </div>

                                <span>
                                    {applicant.experience}
                                </span>

                                <div className="mini-skills">
                                    {applicant.skills
                                        .slice(0, 2)
                                        .map((skill) => (
                                            <b
                                                key={skill}
                                            >
                                                {skill}
                                            </b>
                                        ))}
                                </div>

                                <span
                                    className={`status ${applicant.status}`}
                                >
                                    {applicant.status}
                                </span>

                                <button
                                    className="view-applicant"
                                    onClick={() =>
                                        setSelectedApplicant(
                                            applicant
                                        )
                                    }
                                >
                                    <FiEye />
                                </button>
                            </div>
                        ))}
                    </section>

                    <aside className="company-side-card">
                        <div className="company-profile-header">
                            <div className="company-logo blue large">
                                LT
                            </div>

                            <div>
                                <h3>
                                    شركة التقنية الليبية
                                </h3>

                                <span>
                                    تقنية وبرمجيات
                                </span>
                            </div>
                        </div>

                        <div className="company-profile-info">
                            <div>
                                <FiMapPin />
                                طرابلس، ليبيا
                            </div>

                            <div>
                                <FiUsers />
                                48 موظف
                            </div>

                            <div>
                                <FiBriefcase />
                                12 وظيفة نشطة
                            </div>
                        </div>

                        <button className="company-edit">
                            <FiEdit3 />
                            تعديل ملف الشركة
                        </button>
                    </aside>
                </div>
            </div>
        </main>
    );
}

function DashboardStat({ icon, title, value }) {
    return (
        <div className="dashboard-stat">
            <div>{icon}</div>

            <span>{title}</span>

            <strong>{value}</strong>

            <small>
                <FiActivity />
                هذا الشهر
            </small>
        </div>
    );
}

/* =========================
   INPUT
========================= */

function Input({ label, value, onChange }) {
    return (
        <label className="custom-input">
            <span>{label}</span>

            <input
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
            />
        </label>
    );
}

/* =========================
   JOB MODAL
========================= */

function JobModal({
    job,
    close,
    apply,
    saved,
    toggleSave
}) {
    return (
        <div
            className="modal-backdrop"
            onClick={close}
        >
            <div
                className="modal job-details-modal"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >
                <button
                    className="modal-close"
                    onClick={close}
                >
                    <FiX />
                </button>

                <div className="modal-job-header">
                    <div
                        className={`company-logo large ${job.color}`}
                    >
                        {job.logo}
                    </div>

                    <div>
                        <span>{job.company}</span>
                        <h2>{job.title}</h2>
                    </div>
                </div>

                <div className="modal-job-meta">
                    <span>
                        <FiMapPin />
                        {job.city}
                    </span>

                    <span>
                        <FiBriefcase />
                        {job.type}
                    </span>

                    <span>
                        <FiClock />
                        {job.experience}
                    </span>

                    <span>
                        <FiDollarSign />
                        {job.salary}
                    </span>
                </div>

                <div className="modal-section">
                    <h3>عن الوظيفة</h3>

                    <p>{job.description}</p>
                </div>

                <div className="modal-section">
                    <h3>المهارات المطلوبة</h3>

                    <div className="skills">
                        {job.skills.map((skill) => (
                            <span key={skill}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="job-modal-footer">
                    <div>
                        <span>
                            <FiUsers />
                            {job.applicants} متقدم
                        </span>

                        <span>
                            <FiClock />
                            {job.posted}
                        </span>
                    </div>

                    <div>
                        <button
                            className={
                                saved
                                    ? "modal-save saved"
                                    : "modal-save"
                            }
                            onClick={() =>
                                toggleSave(job.id)
                            }
                        >
                            <FiBookmark />
                            حفظ
                        </button>

                        <button
                            className="primary-button"
                            onClick={apply}
                        >
                            <FiSend />
                            تقدم الآن
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* =========================
   APPLY
========================= */

function ApplyModal({
    job,
    close,
    submit
}) {
    return (
        <div
            className="modal-backdrop"
            onClick={close}
        >
            <div
                className="modal apply-modal"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >
                <button
                    className="modal-close"
                    onClick={close}
                >
                    <FiX />
                </button>

                <div className="modal-title">
                    <div className="apply-icon">
                        <FiSend />
                    </div>

                    <div>
                        <span>
                            التقديم على الوظيفة
                        </span>

                        <h2>{job.title}</h2>

                        <small>
                            {job.company}
                        </small>
                    </div>
                </div>

                <form onSubmit={submit}>
                    <div className="two-inputs">
                        <Input
                            label="الاسم الكامل"
                            value="إبراهيم رمضان"
                            onChange={() => {}}
                        />

                        <Input
                            label="رقم الهاتف"
                            value="0940000000"
                            onChange={() => {}}
                        />
                    </div>

                    <label className="custom-input">
                        <span>رسالة تعريفية</span>

                        <textarea
                            required
                            placeholder="اكتب نبذة مختصرة عن خبرتك..."
                        />
                    </label>

                    <div className="upload-area">
                        <FiUpload />

                        <div>
                            <strong>
                                السيرة الذاتية
                            </strong>

                            <span>
                                إبراهيم رمضان - CV.pdf
                            </span>
                        </div>

                        <button type="button">
                            تغيير الملف
                        </button>
                    </div>

                    <button className="submit-button">
                        <FiSend />
                        إرسال طلب التقديم
                    </button>
                </form>
            </div>
        </div>
    );
}

/* =========================
   AUTH
========================= */

function AuthModal({
    title,
    authType,
    setAuthType,
    close,
    submit,
    register
}) {
    return (
        <div
            className="modal-backdrop"
            onClick={close}
        >
            <div
                className="modal auth-modal"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >
                <button
                    className="modal-close"
                    onClick={close}
                >
                    <FiX />
                </button>

                <div className="auth-heading">
                    <div className="auth-logo">
                        <FiBriefcase />
                    </div>

                    <span>مسار ليبيا</span>

                    <h2>{title}</h2>

                    <p>
                        اختر نوع الحساب للمتابعة
                    </p>
                </div>

                <div className="account-types">
                    <button
                        className={
                            authType === "applicant"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setAuthType("applicant")
                        }
                    >
                        <FiUser />

                        <span>
                            <strong>
                                باحث عن عمل
                            </strong>

                            <small>
                                أبحث عن فرصة
                            </small>
                        </span>
                    </button>

                    <button
                        className={
                            authType === "company"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            setAuthType("company")
                        }
                    >
                        <FiBriefcase />

                        <span>
                            <strong>شركة</strong>

                            <small>
                                أبحث عن موظفين
                            </small>
                        </span>
                    </button>
                </div>

                <form onSubmit={submit}>
                    {register && (
                        <Input
                            label={
                                authType ===
                                "company"
                                    ? "اسم الشركة"
                                    : "الاسم الكامل"
                            }
                            value=""
                            onChange={() => {}}
                        />
                    )}

                    <Input
                        label="البريد الإلكتروني"
                        value=""
                        onChange={() => {}}
                    />

                    <Input
                        label="كلمة المرور"
                        value=""
                        onChange={() => {}}
                    />

                    {register && (
                        <Input
                            label="تأكيد كلمة المرور"
                            value=""
                            onChange={() => {}}
                        />
                    )}

                    <button className="submit-button">
                        {register ? (
                            <>
                                <FiPlus />
                                إنشاء الحساب
                            </>
                        ) : (
                            <>
                                <FiLogIn />
                                تسجيل الدخول
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

/* =========================
   CREATE JOB
========================= */

function CreateJobModal({
    job,
    setJob,
    close,
    submit
}) {
    const update = (field, value) => {
        setJob((previous) => ({
            ...previous,
            [field]: value
        }));
    };

    return (
        <div
            className="modal-backdrop"
            onClick={close}
        >
            <div
                className="modal create-job-modal"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >
                <button
                    className="modal-close"
                    onClick={close}
                >
                    <FiX />
                </button>

                <div className="modal-title">
                    <div className="apply-icon">
                        <FiPlus />
                    </div>

                    <div>
                        <span>
                            إدارة الوظائف
                        </span>

                        <h2>نشر وظيفة جديدة</h2>
                    </div>
                </div>

                <form onSubmit={submit}>
                    <Input
                        label="المسمى الوظيفي"
                        value={job.title}
                        onChange={(value) =>
                            update("title", value)
                        }
                    />

                    <div className="two-inputs">
                        <label className="custom-input">
                            <span>المجال</span>

                            <select
                                value={job.category}
                                onChange={(e) =>
                                    update(
                                        "category",
                                        e.target.value
                                    )
                                }
                            >
                                {categories
                                    .filter(
                                        (item) =>
                                            item !==
                                            "الكل"
                                    )
                                    .map((item) => (
                                        <option
                                            key={item}
                                        >
                                            {item}
                                        </option>
                                    ))}
                            </select>
                        </label>

                        <label className="custom-input">
                            <span>المدينة</span>

                            <select
                                value={job.city}
                                onChange={(e) =>
                                    update(
                                        "city",
                                        e.target.value
                                    )
                                }
                            >
                                {cities
                                    .filter(
                                        (item) =>
                                            item !==
                                            "كل المدن"
                                    )
                                    .map((item) => (
                                        <option
                                            key={item}
                                        >
                                            {item}
                                        </option>
                                    ))}
                            </select>
                        </label>
                    </div>

                    <div className="two-inputs">
                        <Input
                            label="الخبرة المطلوبة"
                            value={job.experience}
                            onChange={(value) =>
                                update(
                                    "experience",
                                    value
                                )
                            }
                        />

                        <Input
                            label="الراتب"
                            value={job.salary}
                            onChange={(value) =>
                                update(
                                    "salary",
                                    value
                                )
                            }
                        />
                    </div>

                    <Input
                        label="المهارات — افصل بينها بفاصلة"
                        value={job.skills}
                        onChange={(value) =>
                            update("skills", value)
                        }
                    />

                    <label className="custom-input">
                        <span>
                            وصف الوظيفة
                        </span>

                        <textarea
                            required
                            value={job.description}
                            onChange={(e) =>
                                update(
                                    "description",
                                    e.target.value
                                )
                            }
                            placeholder="اكتب تفاصيل الوظيفة..."
                        />
                    </label>

                    <button className="submit-button">
                        <FiSend />
                        نشر الوظيفة
                    </button>
                </form>
            </div>
        </div>
    );
}

/* =========================
   APPLICANT MODAL
========================= */

function ApplicantModal({
    applicant,
    close,
    updateStatus
}) {
    return (
        <div
            className="modal-backdrop"
            onClick={close}
        >
            <div
                className="modal applicant-modal"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >
                <button
                    className="modal-close"
                    onClick={close}
                >
                    <FiX />
                </button>

                <div className="applicant-profile-head">
                    <div className="applicant-large-avatar">
                        {applicant.name.charAt(0)}
                    </div>

                    <div>
                        <span>الملف المهني</span>

                        <h2>{applicant.name}</h2>

                        <p>
                            {applicant.title}
                        </p>

                        <small>
                            <FiMapPin />
                            {applicant.city}
                        </small>
                    </div>
                </div>

                <div className="applicant-contact">
                    <span>
                        <FiFileText />
                        {applicant.email}
                    </span>

                    <span>
                        <FiActivity />
                        {applicant.phone}
                    </span>
                </div>

                <div className="applicant-section">
                    <h3>نبذة مهنية</h3>

                    <p>{applicant.bio}</p>
                </div>

                <div className="applicant-section">
                    <h3>التعليم</h3>

                    <div className="education-box">
                        <FiFileText />

                        <div>
                            <strong>
                                {applicant.education}
                            </strong>

                            <span>
                                {applicant.university}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="applicant-section">
                    <h3>المهارات</h3>

                    <div className="skills">
                        {applicant.skills.map(
                            (skill) => (
                                <span key={skill}>
                                    {skill}
                                </span>
                            )
                        )}
                    </div>
                </div>

                <div className="applicant-section">
                    <h3>حالة الطلب</h3>

                    <div className="status-actions">
                        <button
                            onClick={() =>
                                updateStatus(
                                    applicant.id,
                                    "قيد المراجعة"
                                )
                            }
                        >
                            مراجعة
                        </button>

                        <button
                            onClick={() =>
                                updateStatus(
                                    applicant.id,
                                    "مقابلة"
                                )
                            }
                        >
                            مقابلة
                        </button>

                        <button
                            onClick={() =>
                                updateStatus(
                                    applicant.id,
                                    "مقبول"
                                )
                            }
                        >
                            قبول
                        </button>

                        <button
                            onClick={() =>
                                updateStatus(
                                    applicant.id,
                                    "مرفوض"
                                )
                            }
                        >
                            رفض
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;