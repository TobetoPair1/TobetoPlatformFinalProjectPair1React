import React from 'react';
import './BlogPage.css';

const BlogPage = () => {
  return (
    <>
      <section className="blogcards-wrapper">
        <div className="blogcard-grid-space">
          <a className="blogcard" href="https://tobeto.com/bloglar/web-api-nedir-programlama-yaziliminin-arayuezue-nasil-calisir" style={{ backgroundImage: 'url(https://tobeto.s3.cloud.ngn.com.tr/kapak1_e51463a0b9.png)' }}>
            <div>
              <h1> Web API Nedir? Programlama Yazılımının Arayüzü N...</h1>
              <span className="item-decsription"> Farklı yazılım uygulamaları arasında sorunsuz iletişim ve etkileşimi kolaylaştıran bir protokoller, kurallar ve araçlar koleksiyonundan oluş...</span>
              <div className="date">19 Tem 2023</div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default BlogPage;