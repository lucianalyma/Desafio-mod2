import React from "react";
import Educação from "../assets/educacao2.png";
import Igualdade from "../assets/genero2.png";
import Pobreza from "../assets/fome3.png";
import Saúde from "../assets/saude2.png";
import * as S from "../Styles/DesenStyles";


export default function Desenvolvimento (){
    return(
        <>
        <S.Text>
<h2>Desenvolvimento Sustentável - Madre de Deus-Bahia.</h2>

<h3>Madre é uma cidade encantadora, conhecida pela beleza natural e acolhimento, o próprio nome já define a importância que esta cidade-ilha carrega. Porém, também há lacunas estruturais e sociais. </h3>
     </S.Text>
<section>
    <S.Box >
    <img src={Pobreza} alt=""/>

        <div>
        <S.Text2>

            <h3>Madre e o social!</h3>
<p>Madre tem uma renda per capita considerável, contudo, existem bairros com moradores que vivem em vulnerabilidade social, ou seja, eles não têm a garantia das três principais refeições do dia.</p>
</S.Text2>

          </div>
            </S.Box>
            <S.Box >
            <img src={Educação} alt=""/>
            <div>
            <S.Text2>
                <h3>Educação em Madre!</h3>
        <p>De acordo com o Art.205 da nossa Constituição diz que, a Educação é direito de todos. Entretanto, nem sempre o esperado condiz com a realidade. Madre de Deus em 2018 implantou a Educação em tempo Integral, foi um avanço de certa forma, mas  nós também fomos afetados com os déficits causados pela pandamenia. Ainda há muitas crianças e adolescentes na distorção série-idade, assim como a evasão escolar, que é um dos problemas a serem avaliados. Acredito que Educação, Esporte e Cultura é o tripé fundamental para o desenvolvimento social dos jovens. A cidade até promove algumas ações com esses setores, pois o intuíto é atingir os jovens que moram nos bairros mais pobres,  mas ainda assim não é o suficiente para se obter uma Educação de qualidade, e com isso fica claro o quanto se dever ter atenção rigorosa ao tema.</p>
        </S.Text2>
        </div>
         </S.Box >
         <S.Box >
         <img src={Igualdade} alt=""/>
         <div>
         <S.Text2>
     <h3>Sobre Diversidade!</h3>
    <p>Mesmo com todo preconceito enraigado em nossa sociedade, este ano aconteceu a oitava Parada da Diversidade em Madre de Deus,  não é o suficiente, mas já é um passo para se declarar a importância de respeitar às diferenças.</p>
    </S.Text2>
    </div>
    </S.Box >
    <S.Box >
    <img src={Saúde} alt=""/>
    <div>
    <S.Text2>
    <h3>Saúde de qualidade!</h3>
<p>A cidade de Madre de Deus tem apenas um Hospital, não tem UTI, faltam vários equipamentos importantes, há também os Postos de Serviço Familiar que atende as demandas mais simples dos bairros, ou seja, ainda falta muito para que falemos em Saúde de qualidade.  .</p>
</S.Text2>
    </div>
    </S.Box >

</section>

    </>
    )
    }