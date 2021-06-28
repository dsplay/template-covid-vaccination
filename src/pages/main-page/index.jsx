import React from 'react';
import QRCode from 'qrcode.react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { Helmet } from 'react-helmet';

import i18n from '../../i18n';

import ObjectValidateCountry from '../../utils/ObjectValidateCountry';
import { translateManyNameCountries } from '../../utils/countriesNameTranslate';

import Graph from '../../components/graph';
import CardList from '../../components/card-list';
import Table from '../../components/table';
import Footer from '../../components/footer';

import './style.sass';

function MainPage({ selectedCountry = {}, countries = [], pageDuration }) {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          {t('Covid-19 Vaccination')}
        </title>
      </Helmet>
      <div className="flex wrapper-title">
        <h1>{t('Covid-19 Vaccination')}</h1>
      </div>
      <div className="wrapper-main-content flex elements-in-row">
        <CardList className="wrapper-card-list" country={selectedCountry} />
        <Graph className="wrapper-graph" country={selectedCountry} />
      </div>
      <div className="h-20 flex elements-in-row">
        <Table
          countries={translateManyNameCountries(i18n.language, countries)}
          duration={pageDuration}
        />
        <QRCode className="qr-code" value={`https://news.google.com/covid19/map?hl=${i18n.language}`} />
        <Footer className date={selectedCountry.date} />
      </div>
    </>
  );
}

MainPage.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape(ObjectValidateCountry)).isRequired,
  selectedCountry: PropTypes.shape(ObjectValidateCountry).isRequired,
  pageDuration: PropTypes.number.isRequired,
};

export default MainPage;
