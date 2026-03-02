/**
 * GameDev Tech Daily - Internationalization
 * Language switcher with localStorage persistence
 */

(function() {
    'use strict';

    // Default language (English)
    const DEFAULT_LANG = 'en';
    const STORAGE_KEY = 'gamedev-daily-lang';

    // Translation data
    const i18n = {
        en: {
            siteTitle: "GameDev Tech Daily",
            siteDesc: "Daily curated game development technical articles - Focus on Technical Design, UE5/Unity, Open World, Toolchains",
            navHome: "Home",
            navSearch: "Search",
            navCategories: "Categories",
            navRSS: "RSS",
            todayHeadlines: "Today's Headlines",
            archive: "Archive",
            more: "View More →",
            backToHome: "← Back to Home",
            footerText: "Daily Auto Update",
            langSwitch: "中文",
            weekday: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        },
        zh: {
            siteTitle: "游戏技术策划日报",
            siteDesc: "每日精选游戏开发技术文章 - 聚焦技术策划、UE5/Unity、开放世界、工具链",
            navHome: "首页",
            navSearch: "搜索",
            navCategories: "分类",
            navRSS: "RSS",
            todayHeadlines: "今日头条",
            archive: "历史日报",
            more: "查看更多 →",
            backToHome: "← 返回首页",
            footerText: "每日自动更新",
            langSwitch: "EN",
            weekday: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        }
    };

    // Get current language
    function getLanguage() {
        return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    }

    // Set language
    function setLanguage(lang) {
        localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        applyTranslations(lang);
    }

    // Apply translations
    function applyTranslations(lang) {
        const t = i18n[lang];
        
        // Site title and description
        const siteTitle = document.querySelector('.site-title a');
        const siteDesc = document.querySelector('.site-description');
        if (siteTitle) siteTitle.textContent = t.siteTitle;
        if (siteDesc) siteDesc.textContent = t.siteDesc;

        // Navigation
        const navLinks = document.querySelectorAll('.site-nav a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes('/index') || href === '/' || href.endsWith('/gamedev-tech-daily/')) {
                link.textContent = t.navHome;
            } else if (href && href.includes('/search')) {
                link.textContent = t.navSearch;
            } else if (href && href.includes('/categories')) {
                link.textContent = t.navCategories;
            } else if (href && href.includes('/feed.xml')) {
                link.textContent = t.navRSS;
            }
        });

        // Section titles
        const sectionTitles = document.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            if (title.textContent.includes('头条') || title.textContent.includes('Headlines')) {
                title.textContent = t.todayHeadlines;
            } else if (title.textContent.includes('历史') || title.textContent.includes('Archive')) {
                title.textContent = t.archive;
            }
        });

        // More link
        const moreLink = document.querySelector('.more-link');
        if (moreLink) moreLink.textContent = t.more;

        // Back link
        const backLink = document.querySelector('.back-link');
        if (backLink) backLink.textContent = t.backToHome;

        // Footer
        const footerText = document.querySelector('.site-footer p');
        if (footerText) {
            const year = new Date().getFullYear();
            footerText.innerHTML = `© ${year} ${t.siteTitle} | ${t.footerText}`;
        }

        // Language switcher button
        const langBtn = document.querySelector('.lang-switcher');
        if (langBtn) {
            langBtn.textContent = t.langSwitch;
            langBtn.setAttribute('data-lang', lang);
        }

        // Update date display if on home page
        updateDateDisplay(lang);
    }

    // Update date display with proper localization
    function updateDateDisplay(lang) {
        const dateSubtitle = document.querySelector('.date-subtitle');
        if (dateSubtitle) {
            // Parse existing date and reformat
            const text = dateSubtitle.textContent;
            const match = text.match(/(\d{4})年(\d{2})月(\d{2})日/);
            if (match) {
                const year = match[1];
                const month = parseInt(match[2]);
                const day = parseInt(match[3]);
                const date = new Date(year, month - 1, day);
                const weekday = i18n[lang].weekday[date.getDay()];
                
                if (lang === 'en') {
                    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                                      'July', 'August', 'September', 'October', 'November', 'December'];
                    dateSubtitle.textContent = `${monthNames[month-1]} ${day}, ${year} ${weekday}`;
                } else {
                    dateSubtitle.textContent = `${year}年${match[2]}月${match[3]}日 ${weekday}`;
                }
            }
        }

        // Update article dates
        const articleDate = document.querySelector('.article-date');
        if (articleDate) {
            const text = articleDate.textContent;
            const match = text.match(/(\d{4})年(\d{2})月(\d{2})日/);
            if (match) {
                const year = match[1];
                const month = parseInt(match[2]);
                const day = parseInt(match[3]);
                const date = new Date(year, month - 1, day);
                const weekday = i18n[lang].weekday[date.getDay()];
                
                if (lang === 'en') {
                    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                                      'July', 'August', 'September', 'October', 'November', 'December'];
                    articleDate.textContent = `${monthNames[month-1]} ${day}, ${year} ${weekday}`;
                } else {
                    articleDate.textContent = `${year}年${match[2]}月${match[3]}日 ${weekday}`;
                }
            }
        }

        // Update archive dates
        const archiveDates = document.querySelectorAll('.archive-date');
        archiveDates.forEach(dateEl => {
            const text = dateEl.textContent;
            const match = text.match(/(\d{2})-(\d{2})/);
            if (match) {
                const month = parseInt(match[1]);
                const day = parseInt(match[2]);
                if (lang === 'en') {
                    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    dateEl.textContent = `${monthNames[month-1]} ${day}`;
                } else {
                    dateEl.textContent = `${match[1]}-${match[2]}`;
                }
            }
        });
    }

    // Create language switcher button
    function createLangSwitcher() {
        const header = document.querySelector('.site-header .container');
        if (!header) return;

        const langBtn = document.createElement('button');
        langBtn.className = 'lang-switcher';
        langBtn.setAttribute('aria-label', 'Switch Language');
        
        const currentLang = getLanguage();
        langBtn.textContent = i18n[currentLang].langSwitch;
        langBtn.setAttribute('data-lang', currentLang);
        
        langBtn.addEventListener('click', function() {
            const current = getLanguage();
            const next = current === 'en' ? 'zh' : 'en';
            setLanguage(next);
        });

        header.appendChild(langBtn);
    }

    // Initialize
    function init() {
        createLangSwitcher();
        const lang = getLanguage();
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        applyTranslations(lang);
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
