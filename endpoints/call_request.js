const objvar = require('./endpoint_login')
const objvar2 = require('./endpoint_estadoPostulante')
const objvar3 = require('./endpoint_montoDeuda')
const objvar4 = require('./endpoint_concursos')
const opts = require('../bot_responses/responses_negocio')



async function main() {

    let documento = "0002607128"
    let paisISO = "PE"
    // let token = "KwVSLdJ9ekS1Bdv-u3unH18Esf2g28u09fxZwpTUjJjf3lWCquG_V8Ti5ZNjgEvsARpgHVEWPcDoduWYpCI0XpErNNepd-3esi6wsyrZ3RSBCMKHU2Y10FM0l5luACSYUhvVB5p7LzDzq72LBFFm--YFLZvD8gnjL95WmGa0V2yABrXPhOQ0JFh9CIcENwVQCe6R1SbBXzUIiawThFVHa0CxRt-8yUbLSmWr4m6N8F5-B73wKwCYOnXRaSIWK8JbQFMo2a9Re2gd1n07ejH_5DiQOEpkwqrQUITPGliYwzOgwp6r-a2LEzs72FkvF2tQmrcCqMTPBykFaD2oG0t0lKEt8GeQUlc2F4lJzaLS-AI0vdNX6T_G7lQOGyLPW_FB0FYRCK4Su-S9Q0nmIb9N5SC6NPyOMsl7AV6wGWwGzvdMsRNhBkATRq4otcIvUGi95l30z81Q42whyrOaPhF1BDldGMan6z1ydAkYjkO3vUfB4EKLFPiPusnwo5Wg_qkYQ3Ce1Dc-hU_axYv8FnyrX_Ai3yZtV3Yy_W6lu9FB6edTLwx7OJohlAHq1Kje7VUERFC5gtlAnj4cBOA08s_jaLL28KbvZvQ9UOagd_GWcd0wqnYhTaZqIf-Tk47cMrq-KX2kfmfehwdN0WCvGDzpkQ6snn84q72KsFQsIOvwArEr6Dcph1b-jBWWtWrn2gV3m_n-YtkYyDX9ubyD1h4jL9x9-vrQjIrr44PUxmcXqtKbA9NGoujPVtckUWBmJl6173mCbZaDs-wEYqt7bsmW58maoewmMBYbm3HcsX5p4inVBcdWm2hX2RrCjoTDwLX6EhznUbGwsHSpYUyGRp2JP3_mwrGQl8DQZ9HkXT1Z1JYSm09jihEJuUBd5BCg3Sg9MLRniAR3QFcak8paBb74SZdgS6aLOWZ2jKkp0KERP_bwFp7F9UsHXospj2UnxqgXk9T89JA36ij1-Xw7poOySLGL_f7JkKJ0cOQyLM9_Ypnusk5k4RzzWj8xZX0h3Fj7UowdswIYWCjGNEVfPQhgltkFUm7UhzOFucyhXvYsbMaAh6_sVvHFRdoe8e8GZHMIfjkmuoucDUiifNGBRbhItYgGP3jLSRTtyT7jl7c_IIfeB03ywBQduSdtKF6sUW1dKlmV58PfndVHCl7fn_meG3XlfaUTDHwS7d3B6rMTLMUKiNoS6ML_P7O4ZEhx8EHaeUFHMZRQD_VOs3A4C0CajtHwtxqSo8lP0qQyhmPcBWLYrfpsbnqtrGU60dgSo7o8pvDBq3M6DHhgo6tHelrMFe3wtWeQSBAlJlewrHw1JPTomR18L7VOsxtCnXriDtLnG3cACN7jnbZpiVr4L7tHhM6R_A7532_JNUlWMzyUlEzOUKtd-xY8QjoqXAC4wOgBVRmmq6L3Mrccv9zAdwnO7Y2T2VlcaxzfDV-YMshEpsV-M3RbBCQV0hVi-xPp067gbyPBK-sdsm8wSgkq6ptLkjxeyo7GNu5Vse_iuxTLU2nGUaZMTH2IbEUOAfWKhl_tSt9RersYAnnNVS9cIS7WJyURiBkAMBNcOPJju1E6_P5JEx_T5pK3n2VfY61ZssWgQctAl-XO9GTgdmldowgk-voPJEzFfRXkv17MXz7N5YLbvWuMO40-ixCHarW4ISKe50aSoxmiTfmKy7rAyFdkkVbimGhE2ZD5J7G5mwKSZvl_tnnvrAN03sYqlnkKGrzg7-gLbXIt1wPf5h4VHZrEly02EmSqhs7KNBHa-DU1e6x12jNdpM6vME7lJ4seHN_3jVORHMjWKMUe-BmtxRjHXLeWpLdFCnGwlc7HDWB4MWenYBEZtuRSEcz5JbkU8XidcBROtEalozOUSERPdh_1xI-AfmfkujXohgC1AfCGXWfkwh6X2Zm7pEfJO7xzwUpJ1lepkiuRVpfRX_VQti8es1WgFwBIWmaE8oFu9rBHuGS--EkmamlN0hX84kXlqh4VHfApyCR-Rz-p_84Wiig3OHz44F1xoABpbm8tTCelJa_gAz9U4dlNlFrr1SPSYMPxw6P-ltKhSRQukf_WYCyMAEX5lFauk3ZFT1J972OmFWsV2Dp_doVlcNP2Ts93rrZ4DQTvUoQTMDNiJyxpAH4lzP0hksdqpG7OHCOXo6pxIt00zuSEENND4K5odQLEA3fgy5Hk7miFuw2Km06ve5PSHsVQYDGFg6fi_10DHMPYw7Cbe3JzT0FtS_hd5Uy_rkCSAE86Nm_XItR9je60663PeXbel22ZE39JOIQD4S5kcK7T669bodspqIGHys_rVsZ8y7g7hRNfu63ttlV35Z51MIUfGeWnes3J7GTjzchwLkE_Iu_4tPp8mEsJvhj3nlr-CNG-s6KyRBwydPAHLNvnqpf43RZqpoSiY8BavyaAp_ppZuirpQKmKQyNsaXl6ekYCkPDjvobcGA9QRTF4iYMq07dfaYgvUrvRWCAIDc4ySidG2Zd7XfmoDP28CsS_ke1bYS29w"
    // let campania = "201916"

    let response_login = await objvar.doRequest_Login(documento,paisISO);
    var result_login = JSON.parse(response_login); //Need to parse
    // console.log('access_token : ' + result_login.access_token)
    console.log('paisISO : ' + result_login.paisISO)
    // console.log('simbolo : ' + result_login.simbolo)
    // console.log('codigoConsultora : ' + result_login.codigoConsultora)
    // console.log('campania : ' + result_login.campania)
    // console.log('fechaVencimiento : ' + result_login.fechaVencimiento) 
    // console.log('nombreConsultora : ' + result_login.nombreConsultora)   
    // console.log('numeroDocumento : ' + result_login.numeroDocumento)
    // console.log('ConsultoraID : ' + result_login.consultoraID)
    // console.log('CodigoUsuario : ' + result_login.codigoUsuario)

    console.log('-----------------------------------')


    let response_concursos = await objvar4.doRequest_Concursos(result_login.access_token, result_login.campania);
    var result_concursos = JSON.parse(response_concursos); //Need to parse
    console.log(result_concursos)

    console.log('-----------------------------------')

    // let response_postulante = await objvar2.doRequest_Postulante(documento,paisISO);
    // //No need to parse
    // console.log('EsConsultora : ' + response_postulante.ExistePostulanteResult.Respuesta.EsConsultora)
    // console.log('EsConsultoraDigital : ' + response_postulante.ExistePostulanteResult.Respuesta.EsConsultoraDigital)
    // console.log('EsPostulante : ' + response_postulante.ExistePostulanteResult.Respuesta.EsPostulante)
    // console.log('EstadoPostulanteId : ' + response_postulante.ExistePostulanteResult.Respuesta.EstadoPostulanteId)

    // console.log('-----------------------------------')

    // let response_deuda = await objvar3.doRequest_Deuda(result_login.access_token,result_login.paisISO,result_login.consultoraID,result_login.codigoUsuario);
    // console.log('Code : ' + response_deuda.Code)
    // console.log('Data : ' + response_deuda.Data)


    // let xxx = opts.interaccionNegocio('DETALLADO',paisISO,documento);  
    // console.log(xxx.codigoConsultora)
    // console.log(xxx[0].opciones[0]) 

    

}
  
main();