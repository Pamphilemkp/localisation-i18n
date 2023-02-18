import React from 'react';
import { useTranslation } from "react-i18next";


const Navbar = () => {
  const { t } = useTranslation();
  
  return (
    <div>{t('app_name')}</div>
  )
}

export default Navbar