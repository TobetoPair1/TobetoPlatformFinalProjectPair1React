import React from 'react';

type Props = {};

const Languages = (props: Props) => {
  return (
    <form action='#' data-hs-cf-bound='true'>
      <div className='row mb-2 mt-4'>
        <div className='col-md-6 col-12'>
          <select name='languageName' className='form-select' aria-label=''>
            <option value=''>Dil Seçiniz*</option>
            <option value={3}>Almanca</option>
            <option value={11}>Arapça</option>
            <option value={19}>Çekçe</option>
            <option value={9}>Çince (Mandarin)</option>
            <option value={17}>Danca</option>
            <option value={18}>Fince</option>
            <option value={4}>Fransızca</option>
            <option value={24}>Hindi</option>
            <option value={14}>Hollandaca</option>
            <option value={23}>İbranice</option>
            <option value={1}>İngilizce</option>
            <option value={2}>İspanyolca</option>
            <option value={15}>İsveççe</option>
            <option value={5}>İtalyanca</option>
            <option value={8}>Japonca</option>
            <option value={10}>Korece</option>
            <option value={12}>Lehçe</option>
            <option value={20}>Macarca</option>
            <option value={16}>Norveççe</option>
            <option value={6}>Portekizce</option>
            <option value={22}>Romence</option>
            <option value={7}>Rusça</option>
            <option value={13}>Türkçe</option>
            <option value={25}>Vietnamca</option>
            <option value={21}>Yunanca</option>
          </select>
        </div>
        <div className='col-md-6 col-12'>
          <select name='proficiency' className='form-select' aria-label=''>
            <option value=''>Seviye Seçiniz*</option>
            <option value='Temel Seviye ( A1 , A2)'>
              Temel Seviye ( A1 , A2)
            </option>
            <option value='Orta Seviye (B1 , B2)'>Orta Seviye (B1 , B2)</option>
            <option value='İleri Seviye (C1 , C2)'>
              İleri Seviye (C1 , C2)
            </option>
            <option value=' Anadil'>Anadil</option>
          </select>
        </div>
      </div>
      <button
        className='btn btn-primary py-2 mb-3 d-inline-block mobil-btn'
        style={{
          backgroundColor: '#a3f',
          borderRadius: '38px',
          border: 'none',
        }}
      >
        <b>Kaydet</b>
      </button>
    </form>
  );
};

export default Languages;
