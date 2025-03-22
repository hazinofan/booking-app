import { useEffect, useRef, useState } from "react";


export default function Layout({ children }) {
    const [modal, setModal] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [activeCurrency, setActiveCurrency] = useState(false)
    const [isClosing, setIsClosing] = useState(false);
    const [activeTab, setActiveTab] = useState("translation");
    const [expanded, setExpanded] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setExpanded(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);



    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setModal(false);
            setIsClosing(false);
        }, 300);
    };

    const suggestedLanguages = [
        { language: "Français", region: "Belgique" },
        { language: "Français", region: "Canada" },
        { language: "English", region: "United States" },
        { language: "English", region: "United Kingdom" },
        { language: "العربية", region: "Morocco" },
    ];

    const suggestedCurrencies = [
        { language: "Moroccan Dirham", logo: "MAD" },
        { language: "Euro", logo: "EUR - €" },
        { language: "United States Dollar", logo: "USD - $" },
        { language: "Pound Sterling", logo: "GBP - £" }
    ];


    return (
        <div className="layout">
            {/* Navbar */}
            <div className='main_div'>
                {/* logo element */}
                <div className="image_container">
                    <img src='/images/logo.png' alt='logo element' className='image-dimensions' />
                </div>
                <div className="search-bar_container" ref={containerRef}>
                    {/* search bar */}
                    <div className={`search-bar ${expanded ? 'hidden' : ''}`} onClick={() => { setExpanded(!expanded) }}>
                        <button className="search-button active">Nearby</button>
                        <div className="separator"></div>
                        <button className="search-button">Anytime</button>
                        <div className="separator"></div>
                        <button className="search-button disabled">Add guests</button>
                        <button className="search-icon-button">
                            <svg
                                className="search-icon"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 2.5a7.5 7.5 0 0 1 5.964 12.048l4.743 4.745a1 1 0 0 1-1.32 1.497l-.094-.083-4.745-4.743A7.5 7.5 0 1 1 10 2.5Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" />
                            </svg>
                        </button>
                    </div>

                    {expanded && (
                        <div className="search-expanded">
                            <p className=" experiences_header">Experiences</p>
                            <div className="search-bar">
                                <div className="search-section">
                                    <p className="label">Where</p>
                                    <p className="sublabel">Search destinations</p>
                                </div>

                                <div className="separator"></div>

                                <div className="search-section">
                                    <p className="label">Date</p>
                                    <p className="sublabel">Add dates</p>
                                </div>

                                <div className="separator"></div>

                                <div className="search-section">
                                    <p className="label">Who</p>
                                    <p className="sublabel">How many</p>
                                </div>

                                <button className="search-btn">
                                    <svg
                                        className="search-icon"
                                        width="16"
                                        height="16"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M10 2.5a7.5 7.5 0 0 1 5.964 12.048l4.743 4.745a1 1 0 0 1-1.32 1.497l-.094-.083-4.745-4.743A7.5 7.5 0 1 1 10 2.5Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* user informations part */}
                <div className='users_informations'>
                    <p className='experience_text'> Add your experience </p>
                    <svg className="experience_logo" width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => { setModal(true) }}><path d="m9.563 7.505.056.117 5.307 13.005a1 1 0 0 1-1.802.86l-.05-.105L11.693 18H5.407l-1.49 3.407a1 1 0 0 1-1.208.555l-.11-.04a1 1 0 0 1-.556-1.208l.04-.11L7.778 7.6c.336-.77 1.394-.795 1.786-.094ZM19 2a1 1 0 0 1 .993.883L20 3v4h1a1 1 0 0 1 .993.883L22 8a1 1 0 0 1-.883.993L21 9h-1v7a1 1 0 0 1-.883.993L19 17a1 1 0 0 1-.993-.883L18 16V3a1 1 0 0 1 1-1ZM8.66 10.567 6.282 16h4.595L8.66 10.567ZM11 2h5a1 1 0 0 1 .993.883L17 3v2.975a4 4 0 0 1-4 4 1 1 0 1 1 0-2 2 2 0 0 0 1.995-1.85l.005-.15V4h-4a1 1 0 0 1-.117-1.993L11 2h5-5Z" fill="#212121" /></svg>
                    <div className='user_window' onClick={() => { setDropdown(!dropdown) }}>
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 13.5a3.251 3.251 0 0 1 3.163 2.5h9.337a.75.75 0 0 1 .102 1.493l-.102.007h-9.337a3.251 3.251 0 0 1-6.326 0H2.75a.75.75 0 0 1-.102-1.493L2.75 16h2.837a3.251 3.251 0 0 1 3.163-2.5Zm6.5-9.5a3.251 3.251 0 0 1 3.163 2.5h2.837a.75.75 0 0 1 .102 1.493L21.25 8h-2.837a3.251 3.251 0 0 1-6.326 0H2.75a.75.75 0 0 1-.102-1.493L2.75 6.5h9.337A3.251 3.251 0 0 1 15.25 4Z" fill="#212121" /></svg>
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.754 14a2.249 2.249 0 0 1 2.25 2.249v.918a2.75 2.75 0 0 1-.513 1.599C17.945 20.929 15.42 22 12 22c-3.422 0-5.945-1.072-7.487-3.237a2.75 2.75 0 0 1-.51-1.595v-.92a2.249 2.249 0 0 1 2.249-2.25h11.501ZM12 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" fill="#212121" /></svg>
                    </div>
                    {dropdown && (
                        <>
                            <div className="dropdown-menu">
                                <ul>
                                    <li>Sign Up</li>
                                    <li>Log In</li>
                                    <hr />
                                    <li>Gift Cards</li>
                                    <li>AIY your home</li>
                                    <li>Host an experience</li>
                                    <li>Help Center</li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {modal && (
                <div className={`modal-overlay ${isClosing ? "fade-out" : ""}`}>
                    <div className={`modal ${isClosing ? "modal-hide" : ""}`}>
                        <div>
                            <span className="close-modal" onClick={closeModal}>X</span>
                        </div>
                        <div className="Tabs_container">
                            <p
                                className={`tab ${activeTab === "translation" ? "active" : ""} lang`}
                                onClick={() => setActiveTab("translation")}
                            >
                                Language & Regions
                            </p>
                            <p
                                className={`tab ${activeTab === "currency" ? "active" : ""} curr`}
                                onClick={() => setActiveTab("currency")}
                            >
                                Currency
                            </p>
                        </div>

                        <div className="tab-content">
                            {activeTab === "translation" && (
                                <>
                                    <div className="translation_title">
                                        <div className="translation_group">
                                            <span style={{ fontWeight: 500, fontSize: "20px" }}>Language Preferences</span>
                                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 2a1 1 0 1 0-2 0v1h-4a1 1 0 0 0-1 1v1.25a1 1 0 1 0 2 0V5h8v.25a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-4V2ZM8.563 7.505l.056.117 5.307 13.005a1 1 0 0 1-1.801.86l-.05-.105L10.692 18H4.407l-1.49 3.407a1 1 0 0 1-1.208.555l-.11-.04a1 1 0 0 1-.555-1.208l.04-.11L6.777 7.6c.337-.77 1.395-.795 1.786-.094Zm-.902 3.062L5.282 16h4.595l-2.216-5.432ZM13.499 7a1 1 0 0 1 1-1h5a1 1 0 0 1 .708 1.707L18.414 9.5H22a1 1 0 1 1 0 2h-4v2.984a2.5 2.5 0 0 1-3.219 2.394l-.569-.17a1 1 0 1 1 .575-1.916l.569.17a.5.5 0 0 0 .643-.478V11.5H12a1 1 0 1 1 0-2h4a1 1 0 0 1 .292-.707L17.085 8H14.5a1 1 0 0 1-1-1Z" fill="#212121" />
                                            </svg>
                                        </div>

                                        <p style={{ marginTop: "8px", fontSize: "14px", color: "#444" }}>
                                            Choose the language you'd like to use across the website.
                                        </p>
                                    </div>
                                    <div className=" mid-title"> Suggested languages and regions </div>
                                    <div className="language-container">
                                        <div className="language-list">
                                            {suggestedLanguages.map((item, index) => (
                                                <div key={index} className="language-item">
                                                    <p className="language-name">{item.language}</p>
                                                    <p className="language-region">{item.region}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeTab === "currency" && (
                                <>
                                    <p style={{ marginTop: "8px", fontSize: "25px", color: "black", fontWeight: 500 }}>
                                        Choose a currency
                                    </p>
                                    <div className="language-container">
                                        <div className="language-list">
                                            {suggestedCurrencies.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className={`language-item ${activeCurrency === item.language ? "active-option" : ""}`}
                                                    onClick={() => setActiveCurrency(item.language)} // Add click to select active item
                                                >
                                                    <p className="language-name">{item.language}</p>
                                                    <p className="language-region">{item.logo}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}

                        </div>
                    </div>
                </div>
            )}



            {/* Main Content */}
            <main className="content">
                {children}
            </main>

        </div>
    );
}
