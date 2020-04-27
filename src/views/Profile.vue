<template>
  <v-container>
    <v-card elevation="0" width="100%" class="d-flex justify-center pb-10">
      <v-container class="container-profile col-12">
        <v-row justify="center">
          <v-col cols="12" sm="9" md="4">
            <v-card height="100%" max-height="350px">
              <v-img height="100%" :src="profile.img">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
            <v-row class="row-btns" justify="center">
              <v-btn
                large
                target="blank"
                v-if="profile.facebook"
                :href="profile.facebook"
                class="my-4 btn-midia"
                icon
              >
                <v-icon color="#217b43">mdi-facebook</v-icon>
              </v-btn>
              <v-btn
                large
                target="blank"
                v-if="profile.instagram"
                :href="profile.instagram"
                class="my-4 btn-midia"
                icon
              >
                <v-icon color="#217b43">mdi-instagram</v-icon>
              </v-btn>
            </v-row>
          </v-col>
          <v-col cols="12" sm="12" md="8">
            <v-card flat class="text-profile">
              <h3 class="title-profile">{{profile.name}}</h3>
              <h4 class="my-5">{{profile.office}}</h4>
              <div class="text-justify" v-html="profile.text"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    profile: {
      name: 'Dr. Douglas Yanai',
      office: 'Oftalmologia - CRM 4363',
      img: '/img/doctors/yanai.png',
      text: `<p><strong>Forma&ccedil;&atilde;o:</strong><br />
Dr. Douglas Yanai formou-se m&eacute;dico na Universidade Federal do Paran&aacute; (UFPR). Fez especializa&ccedil;&atilde;o em Oftalmologia e Fellow em Segmento Anterior e posteriormente em Retina e V&iacute;treo no Hospital de Olhos do Paran&aacute;. Nos anos de 2002 e 2003 realizou Retina and Vitreous Fellowship no Doheny Eye Institute - USC (University of Southern California) sob orienta&ccedil;&atilde;o do Dr. Mark S. Humayun e do cientista e PhD James D. Weiland, retornando para Sinop (Brasil) em 2004. Realizou diversas pesquisas e publicou trabalhos cient&iacute;ficos em renomadas revistas internacionais, bem como apresentou-os em congressos no Brasil e no exterior. Membro da American Academy of Ophthalmology e Membro Titular da Sociedade Brasileira de Retina e V&iacute;treo, atualmente &eacute; &nbsp;Oftalmologista e Diretor T&eacute;cnico do Hospital e Maternidade Dois Pinheiros, e tamb&eacute;m Professor no curso de Medicina da Universidade Federal do Mato Grosso (UFMT) - Campus Sinop.</p>

<p>&nbsp;</p>

<p><strong>Artigos Publicados</strong>:</p>

<p><strong>1.&nbsp;</strong>de Balthasar, C ; PATEL, S. ; ROY, A. ; FREDA, Ricardo ; GREENWALD, S. ; HORSAGER, A. ; MAVADEVAPPA, Manjunatha ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; MCMAHON, M. J. ; HUMAYUN, Mark S. ; GREENBERG, Robert J ; WEILAND, James D ; FINE, Ione . Factors Affecting Perceptual Thresholds in Epiretinal Prostheses. Investigative Ophthalmology &amp; Visual Science<img id="_x0030_1460404_1" src="http://buscatextual.cnpq.br/buscatextual/images/curriculo/jcr.gif" style="border-width:0px; line-height:1.6em; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />, v. 49, p. 2303-2314, 2008.&nbsp;</p>

<p><strong>Cita&ccedil;&otilde;es:</strong><a href="http://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&amp;SrcApp=PARTNER_APP&amp;SrcAuth=LinksAMR&amp;KeyUT=000256306800001&amp;DestLinkType=CitingArticles&amp;DestApp=ALL_WOS&amp;UsrCustomerID=83e8e710a8e621f095e069bfe7c1e2bd" id="yui_3_16_0_1_1427683798260_6013" style="text-decoration-line: none;" target="_blank"><img id="yui_3_16_0_1_1427683798260_6014" src="http://buscatextual.cnpq.br/buscatextual/images/v2/isi.gif" style="border-width:0px; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />67</a><a href="http://www.scopus.com/scopus/inward/citedby.url?partnerID=bb5nvXTn&amp;rel=R6.0.0&amp;doi=10.1167/iovs.07-0696&amp;md5=deb2d46f8be0f3e91dd62f0d22852a05" id="yui_3_16_0_1_1427683798260_6017" style="text-decoration-line: none;" target="_blank">|<img id="yui_3_16_0_1_1427683798260_6016" src="http://buscatextual.cnpq.br/buscatextual/images/v2/scopus.png" style="border-width:0px; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />93</a></p>

<p>&nbsp;</p>

<p><strong>2.&nbsp;</strong><img id="_x0000_i1028" src="http://buscatextual.cnpq.br/buscatextual/images/curriculo/ico_relevante.gif" style="border-width:0px; line-height:1.6em; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />&nbsp;JAVAHERI, M. ;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" id="yui_3_16_0_1_1427683798260_8323" style="text-decoration-line: none; line-height: 1.6em;" target="_blank">FUJII, Gildo Yuso</a>&nbsp;; ROSSI, J. V. ; PANZAN, C. Q. ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; LAKHANPAL, Rohit R ;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">MAIA, Mauricio</a>&nbsp;; GUVEN, Dilek ; JUAN, JR, Eugene de ; HUMAYUN, Mark S. . EFFECT OF OXYGENATED INTRAOCULAR IRRIGATION SOLUTIONS ON THE ELECTRORETINOGRAM AFTER VITRECTOMY. Retina (Philadelphia, Pa.)<img id="_x0030_275004X_2" src="http://buscatextual.cnpq.br/buscatextual/images/curriculo/jcr.gif" style="border-width:0px; line-height:1.6em; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />, v. 27, p. 87-94, 2007.&nbsp;</p>

<p><strong>Cita&ccedil;&otilde;es:</strong><a href="http://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&amp;SrcApp=PARTNER_APP&amp;SrcAuth=LinksAMR&amp;KeyUT=WOS:000246985000015&amp;DestLinkType=CitingArticles&amp;DestApp=ALL_WOS&amp;UsrCustomerID=83e8e710a8e621f095e069bfe7c1e2bd" id="yui_3_16_0_1_1427683798260_8104" style="text-decoration-line: none;" target="_blank"><img id="yui_3_16_0_1_1427683798260_8103" src="http://buscatextual.cnpq.br/buscatextual/images/v2/isi.gif" style="border-width:0px; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />8</a><a href="http://www.scopus.com/scopus/inward/citedby.url?partnerID=bb5nvXTn&amp;rel=R6.0.0&amp;doi=10.1097/01.iae.0000256665.79487.a4&amp;md5=2b241c4e02a3f2ab4daa778bdb924dd1" id="yui_3_16_0_1_1427683798260_9112" style="text-decoration-line: none;" target="_blank">|<img id="yui_3_16_0_1_1427683798260_9111" src="http://buscatextual.cnpq.br/buscatextual/images/v2/scopus.png" style="border-width:0px; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />8</a></p>

<p>&nbsp;</p>

<p><strong>3.&nbsp;</strong><img id="_x0000_i1032" src="http://buscatextual.cnpq.br/buscatextual/images/curriculo/ico_relevante.gif" style="border-width:0px; line-height:1.6em; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; WEILAND, James D ; MAVADEVAPPA, Manjunatha ; GREENBERG, Robert J ; FINE, Ione ; HUMAYUN, Mark S. . Visual Performance Using a Retinal Prosthesis in Three Subjects With Retinitis Pigmentosa. American Journal of Ophthalmology<img id="_x0030_0029394_3" src="http://buscatextual.cnpq.br/buscatextual/images/curriculo/jcr.gif" style="border-width:0px; line-height:1.6em; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />, v. 143, p. 820-827.e2, 2007.&nbsp;</p>

<p><strong>Cita&ccedil;&otilde;es:</strong><a href="http://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&amp;SrcApp=PARTNER_APP&amp;SrcAuth=LinksAMR&amp;KeyUT=WOS:000246288800014&amp;DestLinkType=CitingArticles&amp;DestApp=ALL_WOS&amp;UsrCustomerID=83e8e710a8e621f095e069bfe7c1e2bd" style="text-decoration-line: none;" target="_blank"><img id="_x0000_i1034" src="http://buscatextual.cnpq.br/buscatextual/images/v2/isi.gif" style="border-width:0px; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />125</a><a href="http://www.scopus.com/scopus/inward/citedby.url?partnerID=bb5nvXTn&amp;rel=R6.0.0&amp;doi=10.1016/j.ajo.2007.01.027&amp;md5=21e3a027197ae69ab995224a043f29dd" id="yui_3_16_0_1_1427683798260_7298" style="text-decoration-line: none;" target="_blank">|<img id="yui_3_16_0_1_1427683798260_7297" src="http://buscatextual.cnpq.br/buscatextual/images/v2/scopus.png" style="border-width:0px; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />132</a></p>

<p>&nbsp;</p>

<p><strong>4.&nbsp;</strong>MAVADEVAPPA, Manjunatha ; WEILAND, James D ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; FINE, Ione ; GREENBERG, Robert J ; HUMAYUN, Mark S. . Perceptual Thresholds and Electrode Impedance in Three Retinal Prosthesis Subjects. IEEE Transactions on Neural Systems and Rehabilitation Engineering<img id="_x0031_5344320_4" src="http://buscatextual.cnpq.br/buscatextual/images/curriculo/jcr.gif" style="border-width:0px; line-height:1.6em; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />, Unites States os America, v. 13, n.2, p. 201-206, 2005.&nbsp;</p>

<p><strong>Cita&ccedil;&otilde;es:</strong><a href="http://gateway.webofknowledge.com/gateway/Gateway.cgi?GWVersion=2&amp;SrcApp=PARTNER_APP&amp;SrcAuth=LinksAMR&amp;KeyUT=WOS:000229850800014&amp;DestLinkType=CitingArticles&amp;DestApp=ALL_WOS&amp;UsrCustomerID=83e8e710a8e621f095e069bfe7c1e2bd" style="text-decoration-line: none;" target="_blank"><img id="_x0000_i1037" src="http://buscatextual.cnpq.br/buscatextual/images/v2/isi.gif" style="border-width:0px; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />107</a><a href="http://www.scopus.com/scopus/inward/citedby.url?partnerID=bb5nvXTn&amp;rel=R6.0.0&amp;doi=10.1109/tnsre.2005.848687&amp;md5=641d77646663c622ac82c45f213e5a96" style="text-decoration-line: none;" target="_blank">|<img id="_x0000_i1038" src="http://buscatextual.cnpq.br/buscatextual/images/v2/scopus.png" style="border-width:0px; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />112</a></p>

<p>&nbsp;</p>

<p><strong>5.&nbsp;</strong><img id="_x0000_i1039" src="http://buscatextual.cnpq.br/buscatextual/images/curriculo/ico_relevante.gif" style="border-width:0px; line-height:1.6em; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; LAKHANPAL, Rohit R ; WEILAND, James D ; MAVADEVAPPA, Manjunatha ; van BOEMEL, G. ;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">FUJII, Gildo Yuso</a>&nbsp;; GREENBERG, Robert J ; CAFFEY, S. ; JUAN, JR, Eugene de ; HUMAYUN, Mark S. . THE VALUE OF PREOPERATIVE TESTS IN THE SELECTION OF BLIND PATIENTS FOR A PERMANENT MICROELECTRONIC IMPLANT. Transactions of the American Ophthalmological Society Annual Meeting, United States of America, v. 101, p. 223-228, 2003.&nbsp;</p>

<p><strong>Cita&ccedil;&otilde;es:</strong><a href="http://www.scopus.com/scopus/inward/citedby.url?partnerID=bb5nvXTn&amp;rel=R6.0.0&amp;doi=null&amp;md5=f8a2d9f8af7e0fb17f9968fbbee28b49" style="text-decoration-line: none;" target="_blank"><img id="_x0000_i1040" src="http://buscatextual.cnpq.br/buscatextual/images/v2/scopus.png" style="border-width:0px; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />29</a></p>

<p>&nbsp;</p>

<p><strong>6.&nbsp;</strong><img id="_x0000_i1041" src="http://buscatextual.cnpq.br/buscatextual/images/curriculo/ico_relevante.gif" style="border-width:0px; line-height:1.6em; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />&nbsp;LAKHANPAL, Rohit R ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; WEILAND, James D ;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">FUJII, Gildo Yuso</a>&nbsp;; CAFFEY, S. ; GREENBERG, Robert J ; JUAN, JR, Eugene de ; HUMAYUN, Mark S. . Advances in the development of visual prostheses.. Current Opinion in Ophthalmology<img id="_x0031_0408738_6" src="http://buscatextual.cnpq.br/buscatextual/images/curriculo/jcr.gif" style="border-width:0px; line-height:1.6em; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />, United States, v. 14, n.3, p. 122-127, 2003.&nbsp;</p>

<p><strong>Cita&ccedil;&otilde;es:</strong><a href="http://www.scopus.com/scopus/inward/citedby.url?partnerID=bb5nvXTn&amp;rel=R6.0.0&amp;doi=10.1097/00055735-200306000-00002&amp;md5=f317899cbbfe596c5e3bdc69e6a7174b" style="text-decoration-line: none;" target="_blank"><img id="_x0000_i1043" src="http://buscatextual.cnpq.br/buscatextual/images/v2/scopus.png" style="border-width:0px; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />53</a></p>

<p>&nbsp;</p>

<p><strong>7.&nbsp;</strong>CARVALHO, A. C. A. ; RUTHES, H. I. ;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" id="yui_3_16_0_1_1427683798260_5996" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">MAIA, Maur&iacute;cio</a>&nbsp;;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; SATO, M.T. ; MOREIRA, H. ; BORDIGNON, G.F. ; TELLES, F. Q. . Fungal keratitis in the State of Paran&aacute; - Brazil: Clinical, epidemiological and diagnostic findings. Revista Iberoamericana de Micolog&iacute;a<img id="_x0031_1301406_7" src="http://buscatextual.cnpq.br/buscatextual/images/curriculo/jcr.gif" style="border-width:0px; line-height:1.6em; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />, Espanha, v. 18, p. 76-78, 2001.&nbsp;</p>

<p><strong>Cita&ccedil;&otilde;es:</strong><a href="http://www.scopus.com/scopus/inward/citedby.url?partnerID=bb5nvXTn&amp;rel=R6.0.0&amp;doi=null&amp;md5=f8a2d9f8af7e0fb17f9968fbbee28b49" style="text-decoration-line: none;" target="_blank"><img id="_x0000_i1045" src="http://buscatextual.cnpq.br/buscatextual/images/v2/scopus.png" style="border-width:0px; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />3</a></p>

<p>&nbsp;</p>

<p><strong>8.&nbsp;</strong>MINGUETTI, G. ; IWAMOTO, F. M. ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;. Resson&acirc;ncia magn&eacute;tica no diagn&oacute;stico da esclerose m&uacute;ltipla. Imagens (Campinas), v. 20, p. 51-56, 1998.</p>

<p><br />
<strong>Capitulo de Livro Publicado:</strong></p>

<p><strong>1.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" id="yui_3_16_0_1_1427683798260_6221" style="text-decoration-line: none; line-height: 1.6em;" target="_blank">MAIA, Mauricio</a>&nbsp;; HUMAYUN, Mark S. ; FARAH, Michel Eid . Microchipe de Retina. In: Michel Eid Farah. (Org.). Tomografia de Coere&ecirc;ncia &Oacute;ptica - OCT. 1ed.Rio de Janeiro: Cultura M&eacute;dica, 2006, v. , p. 291-294.&nbsp;</p>

<p><strong>2.&nbsp;</strong><a href="http://lattes.cnpq.br/2233267084488852" id="yui_3_16_0_1_1427683798260_6186" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">SALLUM, Juliana M F</a>&nbsp;;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; CHEN, Jane ; FARAH, Michel Eid . Distrofias Retinianas. In: Michel Eid Farah. (Org.). Tomografia de Coer&ecirc;ncia &Oacute;ptica. 1ed.Rio de Janeiro: Cultura M&eacute;dica, 2006, v. , p. 287-290.</p>

<p>&nbsp;</p>

<p><strong>Resumos publicados em anais de congressos:</strong></p>

<p><strong>1.&nbsp;</strong><img id="_x0000_i1046" src="http://buscatextual.cnpq.br/buscatextual/images/curriculo/ico_relevante.gif" style="border-width:0px; line-height:1.6em; margin-bottom:0px; margin-top:0px; vertical-align:baseline" />&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; Lima, Luiz ; BEREZOVSKY, Adriana ;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" style="text-decoration-line: none; line-height: 1.6em;" target="_blank">MAIA, Mauricio</a>&nbsp;; FARAH, Michel Eid ;&nbsp;<a href="http://lattes.cnpq.br/2233267084488852" id="yui_3_16_0_1_1427683798260_7085" style="text-decoration-line: none; line-height: 1.6em;" target="_blank">SALLUM, Juliana M F</a>&nbsp;. OCT in Retinitis Pigmentosa Patient Study: Five-Year Follow-up. In: 2012 American Academy of Ophthalmology Annual Meeting, 2012, Chicago. 2012 American Academy of Ophthalmology Annual Meeting - Final Program, 2012. p. 239-239.&nbsp;</p>

<p><strong>2.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; DIB, Eduardo ; BEREZOVSKY, Adriana ;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">MAIA, Mauricio</a>&nbsp;; FARAH, Michel Eid ;&nbsp;<a href="http://lattes.cnpq.br/2233267084488852" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">SALLUM, Juliana M F</a>&nbsp;. Optical Coherence Tomography in Retinitis Pigmentosa Patients Study Final Results. In: XIV Research Days, 2012, Sao Paulo. XIV Research Days, 2012.&nbsp;</p>

<p><strong>3.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; PALACIOS, Hector ; DIB, Eduardo ; BEREZOVSKY, Adriana ;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" style="text-decoration-line: none; line-height: 1.6em;" target="_blank">MAIA, Mauricio</a>&nbsp;; FARAH, Michel Eid ;&nbsp;<a href="http://lattes.cnpq.br/2233267084488852" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">SALLUM, Juliana M F</a>&nbsp;. Optical Coherence Tomography In Retinitis Pigmentosa Study - 5 years follow Up. In: ARVO 2011 Annual Meeting, 2011, Fort Lauderdale. ARVO 2011 Annual Meeting, 2011. p. 326-326.&nbsp;</p>

<p><strong>4.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; PALACIOS, Hector ; DIB, Eduardo ; BEREZOVSKY, Adriana ;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">MAIA, Mauricio</a>&nbsp;; FARAH, Michel Eid ;&nbsp;<a href="http://lattes.cnpq.br/2233267084488852" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">SALLUM, Juliana M F</a>&nbsp;. Optical Coherence Tomography In Retinitis Pigmentosa Study - 5 years follow Up. In: 2011 PanAmerican Research Day, 2011, Fort Lauderdale. 2011 PanAmerican Research Day, 2011.&nbsp;</p>

<p><strong>5.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; DIB, Eduardo ; BEREZOVSKY, Adriana ;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">MAIA, Mauricio</a>&nbsp;; FARAH, Michel Eid ;&nbsp;<a href="http://lattes.cnpq.br/2233267084488852" style="text-decoration-line: none; line-height: 1.6em;" target="_blank">SALLUM, Juliana M F</a>&nbsp;. Optical Coherence Tomography in Retinitis Pigmentosa Patients Study Comparing Stratus OCT and Spectrallis OCT results. In: XIII Research Days, 2011, Sao Paulo. XIII Research Days, 2011.&nbsp;</p>

<p><strong>6.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;;&nbsp;<a href="http://lattes.cnpq.br/2233267084488852" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">SALLUM, Juliana M F</a>&nbsp;; DIB, Eduardo ; BEREZOVSKY, Adriana ;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">MAIA, Mauricio</a>&nbsp;; FARAH, Michel Eid . Optical Coherence Tomography in Retinitis Pigmentosa Patients Study 5 years follow up. In: XII Research Days, 2010, Sao Paulo. XII Research Days, 2010.&nbsp;</p>

<p><strong>7.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;;&nbsp;<a href="http://lattes.cnpq.br/2233267084488852" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">SALLUM, Juliana M F</a>&nbsp;; DIB, Eduardo ; BEREZOVSKY, Adriana ;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">MAIA, Mauricio</a>&nbsp;; FARAH, Michel Eid . Optical Coherence Tomography in Retinitis Pigmentosa Patients Study. In: XI Research Days, 2009, Sao Paulo. XI Research Days, 2009.&nbsp;</p>

<p><strong>8.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; PALACIOS, Hector ; DIB, Eduardo ; BEREZOVSKY, Adriana ;&nbsp;<a href="http://lattes.cnpq.br/2233267084488852" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">SALLUM, Juliana M F</a>&nbsp;;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">MAIA, Mauricio</a>&nbsp;; FARAH, Michel Eid . Tomografia de Coer&ecirc;ncia &Oacute;ptica como ferramenta de avalia&ccedil;&atilde;o em Pacientes com Retinose Pigment&aacute;ria. In: 33 Congresso da Sociedade Brasileira de Retina e Vitreo, 2008, Salvador. 33 Congresso da Sociedade Brasileira de Retina e Vitreo, 2008.&nbsp;</p>

<p><strong>9.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; MAHADEVAPPA, M. ; FREDA, Ricardo ; FINE, Ione ;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">MAIA, Mauricio</a>&nbsp;; FARAH, Michel Eid ; HUMAYUN, Mark S. . EPIRRETINAL PROSTHESES TO ARTIFICIAL VISION STUDY. In: X Research Days 2008, 2008, Sao Paulo. X Research Days 2008, 2008.&nbsp;</p>

<p><strong>10.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; DIB, Eduardo ; BEREZOVSKY, Adriana ;&nbsp;<a href="http://lattes.cnpq.br/2233267084488852" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">SALLUM, Juliana M F</a>&nbsp;;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">MAIA, Maur&iacute;cio</a>&nbsp;; FARAH, Michel Eid . Optical Coherence Tomography in Retinitis Pigmentosa Patients and Microchip Epiretinal. In: IX Research Days 2007, 2007, Sao Paulo. IX Research Days 2007, 2007.&nbsp;</p>

<p><strong>11.&nbsp;</strong>FREDA, Ricardo ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank">FUJII, Gildo Yuso</a>&nbsp;; AGRAWAL, Rajat ; GREENBERG, Robert J ; MECH, Brian V ; WEILAND, James D ; JUAN, JR, Eugene de ; HUMAYUN, Mark S. . IMPLANTATION OF EPIRETINAL PROSTHESIS IN SIX SUBJECTS. In: WORLD OPHTHALMOLOGY CONGRESS 2006, 2006, Sao Paulo. WORLD OPHTHALMOLOGY CONGRESS 2006, 2006.&nbsp;</p>

<p><strong>12.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; WEILAND, James D ; MAVADEVAPPA, Manjunatha ; GREENBERG, Robert J ; WILLIAMSON, Richard ;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank">FUJII, Gildo Yuso</a>&nbsp;; FREDA, Ricardo ; JUAN, JR, Eugene de ; HUMAYUN, Mark S. . PERFORMANCE OF VISUAL TASKS USING AN EPIRETINAL PROSTHESIS. In: WORLD OPHTHALMOLOGY CONGRESS 2006, 2006, Sao Paulo. WORLD OPHTHALMOLOGY CONGRESS 2006, 2006.&nbsp;</p>

<p><strong>13.&nbsp;</strong>PALACIOS, Hector ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;;&nbsp;<a href="http://lattes.cnpq.br/2233267084488852" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">SALLUM, Juliana M F</a>&nbsp;; BEREZOVSKY, Adriana ;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">MAIA, Mauricio</a>&nbsp;; FARAH, Michel Eid . ESTUDO DE TOMOGRAFIA DE COER&Ecirc;NCIA &Oacute;PTICA EM PACIENTES DE RETINOSE PIGMENTAR. In: WORLD OPHTHALMOLOGY CONGRESS 2006, 2006, Sao Paulo. WORLD OPHTHALMOLOGY CONGRESS 2006, 2006.&nbsp;</p>

<p><strong>14.&nbsp;</strong>LIMA, Ver&ocirc;nica Franco de Castro ;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">MAIA, Mauricio</a>&nbsp;; HUMAYUN, Mark S. ; FARAH, Michel Eid ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; PENHA, Fernando Marcondes ; DIB, Eduardo ; WEILAND, James D ; PRINCIPE, Andr&eacute; Hasner ; MALERBI, Fernando . ELECTRICAL STIMULATION OF RABBITS RETINA: PRINCIPLES FOR RETINAL PROSTHESES DEVOLOPMENT. In: WORLD OPHTHALMOLOGY CONGRESS 2006, 2006, Sao Paulo. WORLD OPHTHALMOLOGY CONGRESS 2006, 2006.&nbsp;</p>

<p><strong>15.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; DIB, Eduardo ; BEREZOVSKY, Adriana ;&nbsp;<a href="http://lattes.cnpq.br/2233267084488852" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">SALLUM, Juliana M F</a>&nbsp;;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">MAIA, Mauricio</a>&nbsp;; FARAH, Michel Eid . Optical Coherence Tomography in Retinitis Pigmentosa Patients. In: VIII Research Days, 2006, Sao Paulo. VIII Research Days, 2006. p. 105-105.&nbsp;</p>

<p><strong>16.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; WEILAND, James D ; MAVADEVAPPA, Manjunatha ;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">FUJII, Gildo Yuso</a>&nbsp;; FARAH, Michel Eid ; HUMAYUN, Mark S. . Visual Performance in computer controlled tests using a retinal prosthesis in three subjects with photoreceptors loss. In: 2005 Research Days, 2005, Sao Paulo. VII Reserach Days, 2005.&nbsp;</p>

<p><strong>17.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; WEILAND, James D ; MAVADEVAPPA, Manjunatha ;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">FUJII, Gildo Yuso</a>&nbsp;; FARAH, Michel Eid ; HUMAYUN, Mark S. . Visual performance in computer controlled tests using a retinal prosthesis in three subjects with photoreceptor loss. In: VII Research Days, 2005, Sao Paulo. VII Research Days, 2005.&nbsp;</p>

<p><strong>18.&nbsp;</strong>HUMAYUN, Mark S. ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; GREENBERG, Robert J ; LITTLE, Jim ; MECH, Brian V ; MAVADEVAPPA, Manjunatha ; WEILAND, James D ;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">FUJII, Gildo Yuso</a>&nbsp;; JUAN, JR, Eugene de . Chronically Implanted Intraocular Retinal Prosthesis in Three Blind Subjects. In: ARVO 2004 - The Association for Research in Vision and Ophthalmology, 2004, Fort Lauderdale. ARVO Annual Meeting 2004, 2004.&nbsp;</p>

<p><strong>19.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; WEILAND, James D ; MAVADEVAPPA, Manjunatha ; GREENBERG, Robert J ; WILLIAMSON, Richard ;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">FUJII, Gildo Yuso</a>&nbsp;; FREDA, Ricardo ; LIEBERMAN, Robert ; JUAN, JR, Eugene de ; HUMAYUN, Mark S. . Performance of visual tasks using an epiretinal prosthesis. In: ARVO 2004 - The Association for Research in Vision and Ophthalmology, 2004, Fort Lauderdale. ARVO Annual Meeting 2004, 2004.&nbsp;</p>

<p><strong>20.&nbsp;</strong>MAVADEVAPPA, Manjunatha ; WEILAND, James D ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; GREENBERG, Robert J ; WILLIAMSON, Richard ;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">FUJII, Gildo Yuso</a>&nbsp;; JUAN, JR, Eugene de ; LABREE, Laurie ; HUMAYUN, Mark S. . Correlation of electrical detection thresholds with electrode impedance in a retinal prosthetic implant. In: ARVO 2004 - The Association for Research in Vision and Ophthalmology, 2004, Fort Lauderdale. ARVO Annual Meeting 2004, 2004.&nbsp;</p>

<p><strong>21.&nbsp;</strong>FREDA, Ricardo ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; WEILAND, James D ; MAVADEVAPPA, Manjunatha ; GREENBERG, Robert J ; CIMMARUSTI, Valerie ;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">FUJII, Gildo Yuso</a>&nbsp;; JUAN, JR, Eugene de ; HUMAYUN, Mark S. . Pre and post-operative evaluation in the selection of patients for acute epiretinal electrical stimulation. In: ARVO 2004 - The Association for Research in Vision and Ophthalmology, 2004, Fort Lauderdale. ARVO Annual Meeting 2004, 2004.&nbsp;</p>

<p><strong>22.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; GUVEN, Dilek ; FARAH, Michel Eid ;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">MAIA, Maur&iacute;cio</a>&nbsp;; HUMAYUN, Mark S. . O Uso da Tomografia de Coer&ecirc;ncia &Oacute;ptica na Pr&oacute;tese Epiretiniana. In: XVI Congresso Brasileiro de Preven&ccedil;&atilde;o da Cegueira e Reabilita&ccedil;&atilde;o Visual, 2004, Rio de Janeiro. Arquivos Brasileiros de Oftalmologia (Impresso), 2004. v. 67. p. 47-47.&nbsp;</p>

<p><strong>23.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; WEILAND, James D ; MAVADEVAPPA, Manjunatha ;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">FUJII, Gildo Yuso</a>&nbsp;; HUMAYUN, Mark S. . O USO DE RESOLU&Ccedil;&Atilde;O DE M&Uacute;LTIPLOS PIXELS NA PR&Oacute;TESE DE VIS&Atilde;O ARTIFICIAL EM DOEN&Ccedil;AS DEGENERATIVAS DA RETINA . In: XVI Congresso Brasileiro de Preven&ccedil;&atilde;o da Cegueira e Reabilita&ccedil;&atilde;o Visual, 2004, Rio de Janeiro. Arquivos Brasileiros de Oftalmologia (Impresso), 2004. v. 67. p. 47-47.&nbsp;</p>

<p><strong>24.&nbsp;</strong>HUMAYUN, Mark S. ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; AGRAWAL, Rajat ; LAKHANPAL, Rohit R ; FREDA, Ricardo ; WEILAND, James D ; MAVADEVAPPA, Manjunatha ; GREENBERG, Robert J ; JUAN, JR, Eugene de . Visual Task Evaluation in Candidate Patients with the Intraocular Retinal Prosthetic Model-1 Device. In: American Academy of Ophthalmology 2004 Anual Meeting, 2004, New Orleans. American Academy of Ophthalmology 2004 Anual Meeting, 2004.&nbsp;</p>

<p><strong>25.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; GUVEN, Dilek ; FARAH, Michel Eid ;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">MAIA, Maur&iacute;cio</a>&nbsp;;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">FUJII, Gildo Yuso</a>&nbsp;; HUMAYUN, Mark S. . The Use of Optical Coherence Tomography in the Epiretinal Prosthesis. In: 2004 Research Days, 2004, Sao Paulo. 2004 Research Days, 2004.&nbsp;</p>

<p><strong>26.&nbsp;</strong>JAVAHERI, M. ;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">FUJII, Gildo Yuso</a>&nbsp;; ROSSI, J. V. ; PANZAN, C. Q. ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; GUVEN, Dilek ;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">MAIA, Maur&iacute;cio</a>&nbsp;; JUAN, JR, Eugene de ; HUMAYUN, Mark S. . The Effects of Various Intraocular Irrigating Solutions on the Rabbit Electroretinogram. In: ARVO - The Association for Research in Vision and Ophthalmology, 2003, Fort Lauderdale. ARVO 2003 Meeting Abstracts, 2003.&nbsp;</p>

<p><strong>27.&nbsp;</strong>PANZAN, C. Q. ; VERMA, D. ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; ROSSI, J. V. ;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">FUJII, Gildo Yuso</a>&nbsp;; DAVE, D. ; WALTON, C. . Role of Perfusion Pressure in the Pathogenesis and Severity of Diabetic Retinopathy. In: ARVO - The Association for Research in Vision and Ophthalmology, 2003, Fort Lauderdale. ARVO 2003 Meeting Abstracts, 2003.&nbsp;</p>

<p><strong>28.&nbsp;</strong>HUMAYUN, Mark S. ; GREENBERG, Robert J ; MECH, Brian V ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; MAVADEVAPPA, Manjunatha ; van BOEMEL, G. ;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">FUJII, Gildo Yuso</a>&nbsp;; WEILAND, James D ; JUAN, JR, Eugene de . Chronically Implanted Intraocular Retinal Prosthesis in Two Blind Subjects. In: ARVO 2003 - The Association for Research inVision and Ophthalmology, 2003, Fort Lauderdale. ARVO 2003 meeting abstract, 2003.&nbsp;</p>

<p><strong>29.&nbsp;</strong>MAVADEVAPPA, Manjunatha ; WEILAND, James D ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">FUJII, Gildo Yuso</a>&nbsp;; JUAN, JR, Eugene de ; GREENBERG, Robert J ; WILLIAMSON, Richard ; CIMMARUSTI, Valerie ; HUMAYUN, Mark S. . Electrical Stimulus Parameters for Visual Perception in Blind Humans with Retinal Prosthetic Implants. In: ARVO 2003 - The Association for Research in Vision and Ophthalmology, 2003, Fort Lauderdale. ARVO 2003 meeting abstracts, 2003.&nbsp;</p>

<p><strong>30.&nbsp;</strong><a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">FUJII, Gildo Yuso</a>&nbsp;; HUMAYUN, Mark S. ; WEILAND, James D ; GREENBERG, Robert J ; MECH, Brian V ; LITTLE, Jim ; ROSSI, J. V. ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; TAMEESH, M. K. ; PANZAN, C. Q. . Intraocular Retinal Prosthesis: First Generation Implant and its Surgical Technique. In: ARVO 2003 - The Association for Research in Vision and Ophthalmology, 2003, Fort Lauderdale. ARVO 2003 meeting abstracts, 2003.&nbsp;</p>

<p><strong>31.&nbsp;</strong>van BOEMEL, G. ; MAVADEVAPPA, Manjunatha ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; WEILAND, James D ; GREENBERG, Robert J ; HUMAYUN, Mark S. ; JUAN, JR, Eugene de . Evoked Potentials in a Blind Subject with a Microelectronic Retinal Prosthesis. In: ARVO 2003 - The Association for Research in Vision and Ophthalmology, 2003, Fort Lauderdale. ARVO 2003 meeting abstracts, 2003.&nbsp;</p>

<p><strong>32.&nbsp;</strong>ROSSI, J. V. ; VERMA, D. ;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">FUJII, Gildo Yuso</a>&nbsp;; LAKHANPAL, Rohit R ; PANZAN, C. Q. ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; HUMAYUN, Mark S. ; JUAN, JR, Eugene de . Virtual Reality Simulator for Training and Assessment of Vitreoretinal Surgeons. In: ARVO 2003 - The Association for Research in Vision and Ophthalmology, 2003, Fort Lauderdale. ARVO 2003 meeting abstracts, 2003.&nbsp;</p>

<p><strong>33.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; WEILAND, James D ; MAVADEVAPPA, Manjunatha ;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">FUJII, Gildo Yuso</a>&nbsp;; JUAN, JR, Eugene de ; GREENBERG, Robert J ; WILLIAMSON, Richard ; CIMMARUSTI, Valerie ; HUMAYUN, Mark S. . Visual Perception in Blind Subjects with Microelectronic Retinal Prosthesis. In: ARVO 2003 - The Association for Research in Vision and Ophthalmology, 2003, Fort Lauderdale. ARVO 2003 meeting abstracts, 2003.&nbsp;</p>

<p><strong>34.&nbsp;</strong>HUMAYUN, Mark S. ; LAKHANPAL, Rohit R ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; WEILAND, James D ; MAVADEVAPPA, Manjunatha ; van BOEMEL, G. ;&nbsp;<a href="http://lattes.cnpq.br/3553082390437565" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">FUJII, Gildo Yuso</a>&nbsp;; GREENBERG, Robert J ; CAFFEY, S. ; JUAN, JR, Eugene de . THE VALUE OF PREOPERATIVE TESTS IN THE SELECTION OF BLIND PATIENTS FOR A PERMANENT MICROELECTRONIC IMPLANT. In: American Ophthalmological Society - 2003 Annual Meeting, 2003, Santa Barbara, California. 2003 AOS abstract meeting, 2003.&nbsp;</p>

<p><strong>35.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; MOREIRA, H. ; BUQUERA, M. A. ; WAHAB, S. A. ; MOREIRA, L. B. . A import&acirc;ncia da profilaxia da infec&ccedil;&atilde;o no LASIK: estudo experimental. In: XXXI Congresso Brasileiro de Oftalmologia, 2001, S&atilde;o Paulo. Arquivos Brasileiros de Oftalmologia. S&atilde;o Paulo: Ipsis Gr&aacute;fica e editora SA., 2001. v. 64. p. 12-12.&nbsp;</p>

<p><strong>36.&nbsp;</strong>MOREIRA, H. ; WAHAB, S. A. ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; CASTELLANO, A. G. D. . Isolamento de agente potencialmente infeccioso em microcer&aacute;tomo. In: 23th Pan-American Congress of Ophthalmology, 2001, Buenos Aires. 23th Pan-American Congress of Ophthalmology, 2001.&nbsp;</p>

<p><strong>37.&nbsp;</strong>SANTANNA, A. L. ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; PIANOVSKI, M. D. . Epstein-Barr Virus infection: clinical and serologic observations in children under two years old. In: 32th SIOP Meeting, 2000, Amsterd&atilde;. Medical and Pediatric Oncology, 2000. v. 35. p. 298.&nbsp;</p>

<p><strong>38.&nbsp;</strong>RACHID, A. ; IWAMOTO, F. M. ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; MEDEIROS, C. W. L. . LARGE CELL CARCINOMA PRESENTING AS CEREBRAL INFARCTION AND NONBACTERIAL THROMBOTIC ENDOCARDITIS. In: 17TH INTERNATIONAL CANCER CONGRESS, 1998, Rio de Janeiro. 17TH INTERNATIONAL CANCER CONGRESS, 1998.&nbsp;</p>

<p><strong>39.&nbsp;</strong>MINGUETTI, G. ; IWAMOTO, F. M. ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;. RESSON&Acirc;NCIA MAGN&Eacute;TICA NO DIAGN&Oacute;STICO DA ESCLEROSE M&Uacute;LTIPLA. In: IV CONGRESSO BRASILEIRO DE CL&Iacute;NICA M&Eacute;DICA, 1997, S&atilde;o Paulo. ANAIS DO IV CONGRESSO BRASILEIRO DE CL&Iacute;NICA M&Eacute;DICA, 1997.&nbsp;</p>

<p><strong>40.&nbsp;</strong>MATSUMOTO, L. ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; RUTHES, H. I. . Ecografia versus tomografia na oftalmopatia de Graves. In: X CONGRESSO CIENT&Iacute;FICA DO HOSPITAL DE CL&Iacute;NICAS E SETOR DE CI&Ecirc;NCIAS DA SA&Uacute;DE DA UNIVERSIDADE FEDERAL DO PARAN&Aacute;, 1996, Curitiba. ANAIS DO X CONGRESSO CIENT&Iacute;FICA DO HOSPITAL DE CL&Iacute;NICAS E SETOR DE CI&Ecirc;NCIAS DA SA&Uacute;DE DA UNIVERSIDADE FEDERAL DO PARAN&Aacute;. Curitiba, 1996.&nbsp;</p>

<p>&nbsp;</p>

<p><strong>Resumos publicados em anais de congressos (artigos):</strong></p>

<p><strong>1.&nbsp;</strong>SANTANNA, A. L. ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; PIANOVSKI, M. D. . Epstein-Barr Virus Infection: Clinical and Serologic Observations in Children Under Two Years Old. Medical Pediatric Oncology, v. 35, n.3, p. 298-298, 2000.&nbsp;</p>

<p><strong>2.&nbsp;</strong>IWAMOTO, F. M. ; SCOLLA, R. ;&nbsp;<strong>YANAI, Douglas</strong>&nbsp;; WERNECK, L. . Infarto cerebral cardioemb&oacute;lico, endocardite n&atilde;o-bacteriana tromb&oacute;tica e c&acirc;ncer. Arquivos Brasileiros de Neuropsiquiatria, v. 56, n.1, p. 224-224, 1998.&nbsp;</p>

<p>&nbsp;</p>

<p><strong>Apresenta&ccedil;&otilde;es de Trabalho:</strong></p>

<p><strong>1.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;. S&iacute;ndrome do Olho Vermelho. 2014. (Apresenta&ccedil;&atilde;o de Trabalho/Simp&oacute;sio).&nbsp;</p>

<p><strong>2.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; HUMAYUN, Mark S. . How to Evaluate the Vision of Patients Submitted to Epiretinal Prostheses Implantation. 2013. (Apresenta&ccedil;&atilde;o de Trabalho/Congresso).&nbsp;</p>

<p><strong>3.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; Lima, L ; BEREZOVSKY, Adriana ;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">MAIA, Mauricio</a>&nbsp;; FARAH, Michel Eid ;&nbsp;<a href="http://lattes.cnpq.br/2233267084488852" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">SALLUM, Juliana M F</a>&nbsp;. OCT in Retinitis Pigmentosa Patient Study: Five-Year Follow-up. 2012. (Apresenta&ccedil;&atilde;o de Trabalho/Congresso).&nbsp;</p>

<p><strong>4.&nbsp;</strong><strong>YANAI, Douglas</strong>&nbsp;; PALACIOS, Hector ; DIB, Eduardo ; BEREZOVSKY, Adriana ;&nbsp;<a href="http://lattes.cnpq.br/6377105744231862" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">MAIA, Mauricio</a>&nbsp;; FARAH, Michel Eid ;&nbsp;<a href="http://lattes.cnpq.br/2233267084488852" style="text-decoration-line: none; line-height: 1.6em;" target="_blank" title="Clique para visualizar o currículo">SALLUM, Juliana M F</a>&nbsp;. Optical Coherence Tomography In Retinitis Pigmentosa Study - 5 years follow Up. 2011. (Apresenta&ccedil;&atilde;o de Trabalho/Congresso).&nbsp;</p>

<p><strong>5.&nbsp;</strong><strong>Yanai, D</strong>&nbsp;. Microchipe retiniano: realidade atual dos experimentos. 2004. (Apresenta&ccedil;&atilde;o de Trabalho/Confer&ecirc;ncia ou palestra).&nbsp;</p>

<p><strong>6.&nbsp;</strong><strong>Yanai, D</strong>&nbsp;. Distrofias retinianas e pr&oacute;tese de retina. 2004. (Apresenta&ccedil;&atilde;o de Trabalho/Confer&ecirc;ncia ou palestra).&nbsp;</p>
`,
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
    }
  })
}
</script>

<style scoped>
.title-profile {
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 10px;
}

.subtitle-profile {
  font-size: 1.7rem;
}

.container-profile {
  padding: 10px;
}

.text-profile {
  padding: 15px;
  padding-top: 0px;
}
.text-profile {
  padding: 0px;
}

@media (min-width: 990px) {
  .text-profile {
    padding: 15px;
    padding-top: 0px;
  }

  .text-profile {
    max-height: 350px;
    overflow-y: auto;
  }

  .text-profile::-webkit-scrollbar {
    width: 3px;
    background: #f4f4f4 !important;
  }

  .text-profile::-webkit-scrollbar-track {
    background-color: #f4f4f4 !important;
  }

  .text-profile::-webkit-scrollbar-thumb {
    background: #217b43 !important;
  }
  .col-profile-text {
    padding: 10px 0;
  }
}
</style>>