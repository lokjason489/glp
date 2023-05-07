import { t } from 'i18next';
import React from 'react';

const Footer = () => {
    return (
    <footer className="text-site-800 py-8 border-t-primary border-t-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm">
            <nav>
                <a href="https://www.grandlisboapalace.com/reservation/privacy-policy?skin=glp" rel="noreferrer" target='_blank' className="hover:text-primary-hover mr-2 underline">
                    <span>{t('privacy_policy')}</span>
                </a>
                <span>|</span>
                <a href="https://www.grandlisboapalace.com/reservation/terms-of-use?skin=glp" rel="noreferrer" target='_blank' className=" hover:text-primary-hover mx-2 underline">
                    <span>{t('TnC')}</span>
                </a>
            </nav>
            <div className="text-center select-none sm:text-left mb-3 sm:mb-0">{t('copyright')}</div>
        </div>
    </footer>)
}

export default Footer