import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">Tentang Saya</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/bocii.png"
            alt="logo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hai namaku <strong>Mutia Pegi Intanswari</strong>, Aku berasal dari palembang dan tinggal di Metro selama 1 tahun terakhir untuk menempuh pendidikan ku di SMK Negeri 3 METRO, selama berada di Metro aku mendapatkan banyak pengalaman yang berharga
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            Perjalanan ku memasuki dunia Programming di awali disini. karena aku mengambil Jurusan <strong>Rekayasa Perangkat Lunak</strong>, FYI aku udah belajar coding sejak tahun 2021 yaa.. karena pandemi juga sih pada saat itu, jadi aku mencari suatu kesibukan dan aku tertarik dengan coding, ok skip.., banyak pengalaman yang telah aku lalui selama 1 tahun terakhir ini di SMK NEGERI 3 METRO yang pastinya sih aku dapet temen temen yang baik banget sama aku, kedua aku juga suka banget sama orang orang di sekitarnya ( Guru ), pokonya seru banget sih sekolah disana, dan yang paling bikin aku seneng adalah aku keipilih buat wakilin sekolah di <strong>LKS(Lomba Kompetensi Siswa)</strong> Bidang Web Technology Tingkat Kota METRO dan alhamdullah aku berhasil lolos dan masuk ke Tingkat Provinsi Lampung yang di adakan di SMK NEGERI 7 BANDAR LAMPUNG, pas lomba di provinsi deg degan parah sih karena lawanya 10 orang dan aku cewe sendiri disana, lks di provinsi berlangsung selama 2 hari dan Alhamdulillah gak nyangka aku bisa lolos dan masuk ke Tingkat NASIONAL yg bakal di adakan di POLINELA ( PoliTeknik Negeri Lampung) pada bulan AGUSTUS BESOK, mungkin segini aja ya, OH IYA aku cerita tentang pengalamanku menang lks bukan berarti aku sombong yaaa, aku cuma pengen kalian termotivasi dengan ceritaku, TETAP SEMANGAT !!
            </ScrollAnimation>

            <br /><br />

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
