import { t } from 'i18next';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    skin: string|null|undefined;
}

const Footer: React.FC<Props> = ({skin}) => {
    return (
    <footer className="text-site-800 py-8 border-t-primary border-t-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm">
            <nav>
                <Link to={`/privacy-policy/${skin ? '?skin=' + skin : ''}`} className="hover:text-primary-hover mr-2 underline">
                    <span>{t('privacy_policy')}</span>
                </Link>
                <span>|</span>
                <Link to={`/terms-of-use/${skin ? '?skin=' + skin : ''}`} className=" hover:text-primary-hover mx-2 underline">
                    <span>{t('TnC')}</span>
                </Link>
            </nav>
            <div className="text-center select-none sm:text-left mb-3 sm:mb-0">{t('copyright')}</div>
        </div>
    </footer>)
}

export default Footer