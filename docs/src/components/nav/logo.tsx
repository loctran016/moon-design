import * as React from 'react';
import { CSSObject } from '@emotion/core';
import { Link } from 'gatsby';
import hideVisually from 'polished/lib/mixins/hideVisually';
import rem from 'polished/lib/helpers/rem';
import { colors } from '@heathmont/sportsbet-tokens';

const logoLink: CSSObject = {
  display: 'block',
  maxWidth: rem(180), // Totally arbitrary number
};

export const Logo = () => (
  <Link to="/" css={logoLink}>
    <span css={hideVisually}>Home</span>
    <svg
      viewBox="0 0 188 39"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.2581279 6.03148568c-7.83047406 0-14.17815319 6.43133682-14.17815319 14.36507682 0 7.9335777 6.34767913 14.3649145 14.17815319 14.3649145 7.8309558 0 14.178635-6.4313368 14.178635-14.3649145 0-7.93374-6.3476792-14.36507682-14.178635-14.36507682zm.0651884-3.33436459c9.5676002 0 17.3235733 7.87597391 17.3235733 17.59186031 0 9.7153995-7.7559731 17.5913735-17.3235733 17.5913735-9.56760011 0-17.32309151-7.875974-17.32309151-17.5913735 0-9.7158864 7.7554914-17.59186031 17.32309151-17.59186031zM183.241668 21.3211594c-.722852-.6639846-1.619594-.9883505-2.675293-.9883505-1.11334 0-2.053434.4277281-2.819799 1.2684183-.694272.7670223-1.041248 1.7991842-1.041248 3.0972968 0 1.4748182.448291 2.6106668 1.330421 3.4216627.722853.648894 1.590533.9737467 2.588429.9737467 1.171625 0 2.140138-.4280526 2.892534-1.2687428.693791-.7813016 1.040766-1.8287162 1.040766-3.1563609 0-1.4306824-.433679-2.5514404-1.31581-3.3476703zm1.995792 8.7458717c-1.287069 1.1652184-2.82012 1.7550483-4.598832 1.7550483-2.067724 0-3.774022-.7666978-5.119054-2.2858141-1.200366-1.3424107-1.793163-2.9497987-1.793163-4.8231375 0-1.8137879.549124-3.3773646 1.648496-4.6754773 1.388224-1.6224785 3.181386-2.4334744 5.365036-2.4334744 1.995472 0 3.67335.7671846 5.018222 2.3009047 1.185754 1.3420862 1.778711 2.9347082 1.778711 4.7934432 0 2.1680104-.766686 3.9673568-2.299416 5.3685071zm-13.805808 1.342573h-2.950337V19.3459188l2.950337-1.3286183v13.3923036zm-6.29084-.1919584c-.361587.3688262-.809878.5604601-1.345033.5604601-.534994 0-.983445-.1916339-1.344871-.5604601-.361427-.368664-.549606-.8406902-.549606-1.3863843 0-.5161621.188179-.9589807.564217-1.3276447.361266-.368664.809556-.5455319 1.33026-.5455319.535155 0 .983446.1914717 1.345033.5606224.361426.368664.549445.8255997.549445 1.341924 0 .5309281-.188019.9883505-.549445 1.3570145zm-7.030391-2.4188707c.303623 0 .766525-.0885961 1.388384-.265464v2.8169044c-.650921.1917962-1.243878.2949961-1.793162.2949961-1.026958 0-1.850965-.3540602-2.472985-1.0616938-.636148-.7228865-.954704-1.8436445-.954704-3.3924552v-6.4602198h-1.402675v-2.7135422h1.402675v-2.9648893l2.950336-1.1944259v4.1593152h2.082336v2.7135422h-2.082336v6.4602198c0 1.1358486.260111 1.6077125.882131 1.6077125zm-11.054891-7.3306043c-.621538-.8109959-1.475249-1.2093542-2.530626-1.2093542-1.793163 0-3.109133 1.2093542-3.528362 3.2746514h6.998921c-.216599-.8406902-.520704-1.5337201-.939933-2.0652972zm3.861368 4.3954094h-9.920356c.144185.7228865.404778 1.3274824.766205 1.8290407.67934.9292864 1.648495 1.4013126 2.935404 1.4013126 1.373933 0 2.617972-.6493808 3.311763-1.7256785l.260111-.4277281 2.545558 1.0766222c-1.475248 2.5365121-3.514071 3.8049304-6.131883 3.8049304-2.024372 0-3.672868-.737328-4.959776-2.2269122-1.171625-1.3716183-1.764583-2.9940969-1.764583-4.8966432 0-2.1975424.752236-4.0114926 2.255904-5.4128052 1.214977-1.1358486 2.646873-1.6961464 4.280758-1.6961464 1.865576 0 3.427207.7077959 4.670603 2.1237122.63663.7228865 1.113822 1.6224786 1.417285 2.7286328.231692.8260865.347618 1.6815427.347618 2.566531 0 .147498 0 .4274036-.014611.8551317zm-18.873965-4.4100132c-.751914-.7519317-1.663107-1.120758-2.718484-1.120758-1.128112 0-2.053755.4131244-2.791059 1.2241202-.694433.7817884-1.041248 1.8290407-1.041248 3.1415949 0 1.4895843.448291 2.6400366 1.330261 3.4510325.694433.6346148 1.533212.9443769 2.530626.9443769 1.128112 0 2.068206-.4131243 2.81996-1.2536523.708883-.7819506 1.05602-1.858735 1.05602-3.200659 0-1.3424107-.390489-2.4042668-1.186076-3.1860552zm1.865416 8.5990227c-1.30136 1.1796599-2.747546 1.7694898-4.352529 1.7694898-1.373934 0-2.718806-.5309281-4.049227-1.5781805v1.1657052h-2.949855V12.6051443l2.949855-1.3281315v7.9053438c1.344872-1.0472524 2.689744-1.5781805 4.049227-1.5781805 1.084278 0 2.140138.2951584 3.166935.8997544 1.084279.634128 1.93799 1.5045125 2.559527 2.5809724.622019 1.1061543.925483 2.3010669.925483 3.6136211 0 2.1680104-.766365 3.952753-2.299416 5.3540656zm-18.517677-9.7786826c-.939933 0-1.604983.5455319-1.604983 1.3570146 0 .265464.072413.5012337.202309.6931921.144666.1913094.694272.48663 1.663267.8698977l1.214495.471864c2.198101.8703845 3.138034 1.961935 3.138034 3.6726852 0 1.2979504-.477031 2.3896631-1.446026 3.2595608-.896581.8114827-2.009922 1.223958-3.340343 1.223958-2.38612 0-3.962683-1.2533278-4.945808-3.9082927l2.443762-1.017558c.404778.8406902.795266 1.4159164 1.157174 1.7256785.361426.3243659.824328.48663 1.373934.48663.621537 0 1.098569-.1917962 1.402192-.5752262.275044-.3243659.40526-.6784261.40526-1.0767844 0-.2654641-.072253-.5012338-.21692-.7079582-.159278-.2210037-.723013-.5307658-1.677397-.8995921l-1.344871-.5307658c-1.894638-.7525808-2.849183-1.9470067-2.849183-3.5991796 0-1.1947504.434001-2.1826141 1.30152-2.9497987.882131-.781626 1.93799-1.1650561 3.167096-1.1650561 1.894317 0 3.355115.97326 4.367141 2.9201044l-2.313385 1.1947504c-.709044-1.0764599-1.229588-1.4451239-2.097268-1.4451239zm-8.535986 8.524868c.303624 0 .766365-.0885961 1.388224-.265464v2.8169044c-.65076.1917962-1.243397.2949961-1.793163.2949961-1.026797 0-1.850965-.3540602-2.472984-1.0616938-.636149-.7228865-.954384-1.8436445-.954384-3.3924552v-6.4602198h-1.402513v-2.7135422h1.402513v-2.9648893l2.950176-1.1944259v4.1593152h2.082336v2.7135422h-2.082336v6.4602198c0 1.1358486.260272 1.6077125.882131 1.6077125zm-8.8118323-8.1117436c-1.1857543 0-1.98086.3978715-2.400731 1.1942636-.3323644.6341281-.491803 1.6521729-.491803 3.082693v6.4456161h-2.9498549V18.0173005h2.9498549v1.0764599c.5642167-.4569357 1.0269579-.7666978 1.4029954-.9143581.3619079-.1474981.8386181-.2211659 1.4317361-.2211659.2893336 0 .6507599.014766 1.0847604.0590641v2.6987762c-.4773524-.0144415-.8241674-.0290453-1.0269579-.0290453zm-12.1354767.634128c-.7228526-.6639846-1.6195943-.9883505-2.6752929-.9883505-1.1133406 0-2.0534343.4277281-2.8197992 1.2684183-.6942724.7670223-1.041248 1.7991842-1.041248 3.0972968 0 1.4748182.4482906 2.6106668 1.3304211 3.4216627.7228525.648894 1.5905324.9737467 2.5884286.9737467 1.1716248 0 2.140138-.4280526 2.892534-1.2687428.6939512-.7813016 1.0407663-1.8287162 1.0407663-3.1563609 0-1.4306824-.4336794-2.5514404-1.3158099-3.3476703zm1.9957922 8.7458717c-1.2869087 1.1652184-2.8201203 1.7550483-4.5986714 1.7550483-2.0678849 0-3.7741829-.7666978-5.1192152-2.2858141-1.2005261-1.3424107-1.7931624-2.9497987-1.7931624-4.8231375 0-1.8137879.5492844-3.3773646 1.6484955-4.6754773 1.3882237-1.6224785 3.1815466-2.4334744 5.3650365-2.4334744 1.9954711 0 3.6733496.7671846 5.0182213 2.3009047 1.1857543 1.3420862 1.7787118 2.9347082 1.7787118 4.7934432 0 2.1680104-.7666861 3.9673568-2.2994161 5.3685071zm-17.572124-8.7609622c-.7233342-.6488941-1.5765635-.97326-2.5739779-.97326-1.1138223 0-2.0393048.4131244-2.7766079 1.2241202-.7088836.7817884-1.0558592 1.8434823-1.0558592 3.185893 0 1.4749805.4338399 2.6103423 1.3159705 3.4067344.6942724.6346148 1.5475017.9443769 2.5449161.9443769.7088836 0 1.3739336-.1917961 1.9957923-.5606224 1.258168-.7817883 1.8800267-2.0502066 1.8800267-3.8055795 0-1.4895842-.44813-2.624946-1.3302606-3.4216626zm2.0099218 8.7465207c-1.3015199 1.1796599-2.7477066 1.7694898-4.3528503 1.7694898-1.3593224 0-2.7041941-.5309281-4.0490659-1.5781805v6.8871367l-2.9498548 1.328456V18.0173005h2.9498548v1.1650561c1.3304212-1.0472524 2.6752929-1.5781805 4.0490659-1.5781805 1.0847605 0 2.1402986.2951584 3.167096.8997544 1.0847604.634128 1.9379897 1.5045125 2.5450767 2.5955762.6220192 1.1061542.9400936 2.3155084.9400936 3.6282248 0 2.1535689-.766365 3.9235455-2.299416 5.3248581zm-18.1172339-15.457114c-.5929574-.5458564-1.3158099-.8114827-2.1690392-.8114827-.9689949 0-1.7353598.3245281-2.2849654.9737467-.4627412.5455319-.6939512 1.1650561-.6939512 1.8288785 0 1.0766222.8387786 1.9470067 2.5015642 2.6103422l1.8800267.7227243c1.9954711.7819506 3.3403429 1.7404445 4.0347758 2.8762931.4916425.7817883.7373032 1.6813804.7373032 2.6989384 0 1.8436445-.6793401 3.3924551-2.038823 4.6311791-1.243878 1.1358486-2.7475461 1.6959842-4.5119677 1.6959842-1.4461868 0-2.7770896-.320147-3.8323066-1.1944259-.7238158-.605245-1.6067492-1.3505239-2.4566067-3.5644551l2.3599481-1.7076671c.2165989.8703845 1.0510423 1.8796671 1.398018 2.3224857.6509205.8109959 1.5186004 1.2093542 2.5744596 1.2093542 1.0409269 0 1.8941562-.3837545 2.5595273-1.1358485.5640562-.6341281.8386181-1.3862221.8386181-2.2269123 0-.5460186-.1446668-1.0178825-.4192287-1.3867088-.3904881-.5309281-1.2726187-1.0618561-2.6174904-1.5927842l-1.7931624-.7081205c-2.8490216-1.1209202-4.266307-2.8758063-4.266307-5.2654694 0-1.6662898.593118-3.0528364 1.7931623-4.1294586 1.1716248-1.0470901 2.6179721-1.5780181 4.3242701-1.5780181 1.8650944 0 3.3981455.6784261 4.612801 2.02035.361908.3983583.7522355.9440524 1.1716248 1.6370823l-2.4875953 1.6078748c-.4482906-.6931921-.8532293-1.2093542-1.2146556-1.5338823zm115.7328309.8406902c-.535155 0-.983446-.1917962-1.344872-.5752262-.375877-.368664-.564056-.8260864-.564056-1.3716183 0-.5163243.188179-.9735845.564056-1.3424107.376037-.368664.824328-.5606224 1.344872-.5606224.535155 0 .983445.1919584 1.359483.5606224.361426.3688262.549445.8260864.549445 1.3570145 0 .5456941-.188019 1.0029543-.549445 1.3716183-.376038.3688262-.824328.5606224-1.359483.5606224z"
        fill={colors.neutral[10]}
      />
      <path
        d="M11.38003.14055315c6.2852203 0 11.3803511 5.1720053 11.3803511 11.55125535 0 6.3795746-5.0951308 11.5510931-11.3803511 11.5510931-6.28505974 0-11.37986944-5.1715185-11.37986944-11.5510931 0-6.37925005 5.0948097-11.55125535 11.37986944-11.55125535"
        fill={colors.brand}
      />
    </svg>
  </Link>
);
