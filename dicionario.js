/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react';
 import { LogBox, Platform, StyleSheet, Text, View, ScrollView, Image,ImageBackground } from 'react-native';
 import DropDownItem from 'react-native-drop-down-item';


 const IC_ARR_DOWN = require('./icons/ic_arr_down.png');
 const IC_ARR_UP = require('./icons/ic_arr_up.png');
 
 type Props = {};
 export default class dicionario extends Component<Props> {
   state = {
     contents: [
       {
         title: 'Candomblé',
         body: 'Religião africana mais praticada no mundo. O Candomblé é uma religião de matriz africana que cultua os orixás. O termo candomblé vem da junção das palavras quimbundo candombe (dança com atabaques) + iorubá ilê (casa), que significa casa da dança com atabaques. Decorrida do animismo africano, a religião tem por base a alma da Natureza. Em seu entendimento, os animais e plantas possuem espiritualidade. Atualmente o candomblé reúne cerca de 3 milhões de adeptos em todo o mundo. Uma das religiões africanas mais praticadas no mundo, seus seguidores se espalham pela América e pela Europa, mas é no Brasil que está o maior número de praticantes do Candomblé. Os rituais candomblecistas são realizados em casas que recebem o nome de terreiros, nos quais os sacerdotes e adeptos encenam uma convivência com forças da natureza e ancestrais. \n\nFonte: https://www.educamaisbrasil.com.br/enem/religiao/candomble',
       },
       {
         title: 'Classe',
         body: '“Marx definiu classe social como a posição comum de um conjunto de indivíduos no interior das relações sociais de produção. Para ele, classe era um grupo social com uma função específica no processo produtivo (...)\nOutro importante modelo explicativo que fundamentou estudos sobre classe social foi o proposto por Max Weber, no início do século xx. Na tradição weberiana, há uma diferença entre “classes” e “estados” ou “ordens”: enquanto as classes são definidas como grupos de pessoas cujas oportunidades na vida são determinadas pela situação do mercado, os estados seriam “grupos definidos por status” e cuja “honra” ou “status” lhes eram conferidos por outros. Para muitos autores, os modelos marxista e weberiano são antagônicos. Mas para Peter Burke, eles são complementares, pois Marx e Weber tentaram responder a questões distintas: o primeiro enfatizou o poder e o conflito, o segundo se interessou mais pelos valores e estilos de vida” (SILVA, 2009, p. 63-65).\n\nSILVA, Kalina Vanderlei. Dicionário de conceitos históricos. 2.ed. São Paulo: Contexto, 2009.',
       },
       {
         title: 'Colonização',
         body: 'Os povos ibéricos foram os responsáveis pela colonização da América Latina e marcaram o início das relações coloniais nestes territórios, sobretudo, no Brasil.  Assim, essas relações foram caracterizadas por diversas formas de dominação e exploração, nas quais os povos colonizadores controlavam todas as atividades e práticas advindas das colônias, conquistando principalmente mão de obra brutalmente explorada e também matéria prima.  Vale destacar que esse processo de exploração resultou na acumulação de capital dos países europeus.Os povos colonizadores, ao se estabelecerem nas colônias, trouxeram com eles um modelo de colonização marcado pela dominação e exploração, sendo estas exercidas sob o território, à cultura e à religião dos povos colonizados. Isto porque, ao se estabelecerem nas colônias, os colonizadores controlavam os saberes e os fazeres dos colonizados, impondo a eles costumes e práticas advindos de seu continente de origem e, consequentemente, fomentavam a desvalorização da cultura local. \n\nFonte: https://www.politize.com.br/colonialidade-e-decolonialidade/',
       },
       {
         title: 'Comunismo',
         body: '“O Comunismo é uma ideia que se incorporou ao imaginário do Ocidente contemporâneo, sempre colocada em oposição ao Capitalismo. Tal ideia, no entanto, tem se tornado pouco compreendida pelas novas gerações (...)\nO Dicionário do pensamento marxista oferece duas definições para Comunismo: primeiro, ele seria o movimento político da classe operária dentro da sociedade capitalista, iniciado com a Revolução Industrial. Esse sentido do termo surgiu na década de 1830, com o crescimento da classe operária na Europa Ocidental. Comunismo. Em segundo lugar, o Comunismo seria a sociedade criada pela classe trabalhadora em sua luta com as classes dominantes na sociedade capitalista. Esses dois sentidos foram propostos por Karl Marx e estão intimamente relacionados: assim, o Comunismo é ao mesmo tempo o movimento político e a sociedade que dele emerge. Podemos entendê-lo ainda como uma ideologia, um conjunto articulado de princípios teóricos que fundamentam um tipo de sociedade e uma ação política.\nÉ importante ressaltar que o conceito de Comunismo difere do de Socialismo (...).\nÉ possível trabalhar o Comunismo tanto em sua vertente histórica, como projeto político de crítica ao Capitalismo, quanto em seu sentido mais filosófico, como proposta de busca pela igualdade na humanidade” (SILVA, 2009, p. 70-74).\n\nSILVA, Kalina Vanderlei. Dicionário de conceitos históricos. 2.ed. São Paulo: Contexto, 2009.',
},
       {
         title: 'Cultura',
         body: '"Cultura está muito associada a estudo, educação, formação escolar. Por vezes se fala de cultura para se referir unicamente às manifestações artísticas, como o teatro, a música, a pintura, a escultura. Outras vezes, ao se falar na cultura da nossa época ela é quase identificada com os meios de comunicação de massa, tais como o rádio, o cinema a televisão. Ou então cultura diz respeito às festas e cerimônias tradicionais, às lendas e crenças de um povo, ou a seu modo de se vestir, à sua comida a seu idioma. A lista pode ser ampliada.\nJá eu tenho falado de cultura de maneira mais genérica, preocupado com tudo o que caracteriza uma população humana (...).\nAs várias maneiras de entender o que é cultura derivam de um conjunto comum de preocupações que podemos localizar em duas concepções básicas. A primeira concepção de cultura remete a todos os aspectos de uma realidade social; a segunda refere-se mais especificamente ao conhecimento, às ideias e crenças de um povo. A primeira dessas concepções preocupa-se com todos os aspectos de uma realidade social. Assim, cultura diz respeito a tudo aquilo que caracteriza a existência social de um povo ou nação" ou então de grupos no interior de uma sociedade. Podemos assim falar na cultura francesa ou na cultura xavante. Do mesmo modo falamos na cultura camponesa ou então na cultura dos antigos astecas. Nesses casos, cultura refere-se a realidades sociais bem distintas. No entanto, o sentido em que se fala de cultura é o mesmo: em cada caso dar conta das características dos agrupamentos a que se refere, preocupando-se com a totalidade dessas características, digam elas respeito às maneiras de conceber e organizar a vida social ou a seus aspectos materiais.\nEmbora essa concepção de cultura possa ser usada de modo genérico, ela é mais usual quando se fala de povos e de realidades sociais bem diferentes das nossas, com os quais partilhamos de poucas características em comum, seja na organização da sociedade, na forma de produzir o necessário para a sobrevivência ou nas maneiras de ver o mundo.\n(...) Vamos à segunda. Neste caso, quando falamos em cultura estamos nos referindo mais especificamente ao conhecimento, às ideias e crenças, assim como às maneiras como eles existem na vida social. Observem que mesmo aqui a referência à totalidade de características de uma realidade social está presente, já que não se pode falar em conhecimento, ideias, crenças sem pensar na sociedade à qual se referem. O que ocorre é que há uma ênfase especial no conhecimento e dimensões associadas. Entendemos neste caso que a cultura diz respeito a uma esfera, a um domínio, da vida social. De acordo com esta segunda concepção, quando falarmos em cultura francesa poderemos estar fazendo referência à língua francesa, à sua literatura, ao conhecimento filosófico, científico e artístico produzidos na França e às instituições mais de perto associadas a eles. Outro exemplo comum desta segunda concepção de cultura é a referência à cultura alternativa, compreendendo tendências de pensar a vida e a sociedade na qual a natureza e a realização individual são enfatizadas, e que tem por temas principais a ecologia, a alimentação, o corpo, as relações pessoais e a espiritualidade. Ao se falar em cultura alternativa inclui-se também as instituições associadas, como lojas de produtos naturais e clínicas de medicina alternativa, e da mesma forma seus meios de divulgação.\nDevo alertá-los de que ambas as concepções levam muitas vezes a que se entenda a cultura como uma realidade estanque, parada (...).  As culturas humanas são dinâmicas. De fato, a principal vantagem de estudá-las é por contribuírem para o entendimento dos processos de transformação por que passam as sociedades contemporâneas.” (SANTOS, 2006, p. 21-25).\n\nSANTOS, José Luiz dos. O que é cultura. 16 ed. São Paulo: Brasiliense, 2006.',
       },
       {
         title: 'Democracia',
         body: 'Existem vários modelos e teorias que tentam caracterizar e descrever os sistemas democráticos. Para termos uma referência sobre o que define uma democracia vamos analisar o modelo desenvolvido pelo teórico político Robert Dahl, modelo moderno que lista as condições necessárias para que os processos de escolha representem ao máximo a vontade das pessoas. \n\nFonte: https://www.politize.com.br/democracia-o-que-e/?https://www.politize.com.br/&gclid=CjwKCAjw87SHBhBiEiwAukSeUVP-PLpXap9RphuzCqT4asZE1qFtrCoxnhWMFZXdQw0e1VyMx-dTphoCe58QAvD_BwE',
       },
       {
         title: 'Desigualdades Sociais',
         body: '“É desigual toda a repartição de um recurso que não é uniforme. A repartição do rendimento é desigual na medida em que um ou vários indivíduos têm uma parte maior que os outros. A desigualdade é uma diferença que os indivíduos e grupos sociais julgam segundo escalas de valor”\n\nFonte: https://repositorio.ufsc.br/xmlui/bitstream/handle/praxis/482/5023019-DICIONARIO-DE-SOCIOLOGIA.pdf?sequence=1&isAllowed=y',
       },
       {
         title: 'Ditadura',
         body: '“Podemos definir ditadura como um regime político, uma forma de governo. Como tal, é sempre um conceito relacionado à própria ideia de Estado. Além disso, a noção mais comum de ditadura no Ocidente está, paradoxalmente, bastante relacionada à ideia de democracia. Nessa perspectiva, a ditadura existe por oposição à democracia. Desde o século XIX, com a ascensão da sociedade burguesa e Ditadura dos Estados liberais no Ocidente, a democracia passou a ser considerada a melhor forma de governo, principalmente por ser oriunda do projeto político vencedor, o projeto político burguês. Daí em diante, o termo ditadura passou a designar todos os governos não democráticos, assumindo, para a sociedade ocidental, um significado negativo, visto que, para os valores burgueses, um regime positivo seria a democracia, o regime de governo da maioria (...).\n\n(...) Franz Neumann definiu ditadura como o governo de uma pessoa, ou grupo de pessoas, que se arroga o direito de exercer o poder, monopolizando-o e exercendo-o sem restrições (...).\n\n(...) Apesar de existirem diferentes formas de ditadura no mundo contemporâneo, algumas características básicas são compartilhadas por todas: o cerceamento de direitos políticos e individuais, a ampla utilização da força pelo Estado contra sua própria sociedade e o fortalecimento do poder executivo em detrimento dos outros poderes” (SILVA, 2009, p. 105-108).\n\nSILVA, Kalina Vanderlei. Dicionário de conceitos históricos. 2.ed. São Paulo: Contexto, 2009.',
       },
       {
         title: 'Dominação',
         body: 'Probabilidade de encontrar obediência a uma ordem.',
       },
       {
         title: 'Etnocentrismo',
         body: '“Etnocentrismo é uma visão do mundo onde o nosso próprio grupo é tomado como centro de tudo e todos os outros são pensados e sentidos através dos nossos valores, nossos modelos, nossas definições do que é a existência. No plano intelectual, pode ser visto como a dificuldade de pensarmos a diferença; no plano afetivo, como sentimentos de estranheza, medo, hostilidade, etc” (ROCHA, 1988, p. 5)\n\nROCHA, Everardo P. Guimarães. O que é etnocentrismo. 5 ed. São Paulo: Brasiliense, 1988.',
       },
       {
         title: 'Exclusão Social',
         body: 'A exclusão social é o processo por meio do qual os indivíduos pertencentes a determinados grupos são impedidos de acessar os bens e serviços que lhes possibilitam exercer plenamente seus direitos. Esse problema social está intimamente ligado a desigualdade social, motivada por processos históricos, econômicos e culturais. E sua resolução perpassa a adoção de políticas de governo, já que os indivíduos ou grupos sociais, isoladamente, não podem alterar a estrutura social na qual estão inseridos. \n\nFonte: https://www.educamaisbrasil.com.br/enem/sociologia/exclusao-social ',
       },
       {
         title: 'Fascismo',
         body: 'O fascismo possui associação estreita com o contexto mais amplo do totalitarismo, o regime político que se opunha aos regimes democráticos ou pluralistas.\nEste encarna o domínio exercido por organizações que obedecem sem questionar ao líder do partido único que monopoliza o poder ao abafar toda a forma de pluralismo social (associações, sindicatos, etc.) ou político (partidos, grupos de interesses, etc.)\n\nFonte: https://repositorio.ufsc.br/xmlui/bitstream/handle/praxis/482/5023019-DICIONARIO-DE-SOCIOLOGIA.pdf?sequence=1&isAllowed=y',
       },
       {
         title: 'Feminismo',
         body: 'Feminismo é um movimento social por direitos civis, protagonizado por mulheres, que desde sua origem reivindica a igualdade política, jurídica e social entre homens e mulheres. Sua atuação não é sexista, isto é, não busca impor algum tipo de superioridade feminina, mas a igualdade entre os sexos. O feminismo é um movimento social e político de mulheres e para mulheres que desde o século XIX vem ganhando espaço em todo o mundo, promovendo mudanças políticas e sociais em benefício das mulheres e da sociedade como um todo. Suas bandeiras iniciais eram o acesso à educação formal e o direito ao voto e à elegibilidade para mulheres, seguidas por liberdades civis e autonomia legal, como o direito a posse, direitos trabalhistas e direito ao divórcio.\nMais à frente os direitos reprodutivos e a luta contra a violência física, sexual e psicológica também se tornaram bandeiras importantes desse movimento. Ao longo dos anos e conforme cada contexto, o feminismo também foi incorporando demandas específicas e permanece de suma importância para a emancipação feminina e construção de sociedades mais equânimes.\n\nFonte: https://mundoeducacao.uol.com.br/geografia/o-que-e-feminismo.htm',
       },
       {
         title: 'Gênero',
         body: '“Qualquer agrupamento de indivíduos, objetos, ideias, que tenham caracteres comuns”. – Dicionário Aurélio, 1986. “uma categoria social imposta sobre um corpo sexuado”. – Gates, citada por Scott, 1995.“gênero é um elemento constitutivo das relações sociais baseado nas diferenças percebidas entre os sexos… o gênero é uma forma primária de dar significado às relações de poder.” – Scott, 1995. “uma forma de entender, visualizar e referir-se à organização social da relação entre os sexos.” – Guedes, 1995. Muitas vezes o termo gênero é erroneamente utilizado em referência ao sexo biológico. Por isso, é importante enfatizar que o gênero diz respeito aos aspectos sociais atribuídos ao sexo. Ou seja, gênero está vinculado a construções sociais, não a características naturais.O gênero, portanto, se refere a tudo aquilo que foi definido ao longo tempo e que a nossa sociedade entende como o papel, função ou comportamento esperado de alguém com base em seu sexo biológico.Novamente, o gênero é a construção social atribuída ao sexo.Vejamos um exemplo que nos permita entender melhor essa distinção:Muitas vezes escutamos frases como “cuidar da casa é coisa de mulher”. O que está por trás de frases desse tipo é justamente a questão de gênero: se o que caracteriza “ser mulher” são simplesmente características biológicas e anatômicas, não haveria razão para alguém atribuir uma atividade especificamente às mulheres. Afinal, qual genitália uma pessoa tem não faria diferença na hora de limpar a casa. Isso demonstra que há algum sentido a mais atribuído a “ser mulher”, algo que vá além do sexo biológico. Esse “algo além” é, justamente, o gênero.\n\nFonte:https://www.politize.com.br/vamos-falar-sobre-genero/ ',
       },

       {
         title: 'Globalização',
         body: 'A globalização é um processo de expansão econômica, política e cultural a nível mundial. Sua origem remete ao período das Grandes Navegações no século XVI, momento em que as trocas comerciais se ampliaram para outras nações.\nNo último século, o processo de globalização se acelerou bastante devido à Terceira Revolução Industrial (ou Revolução Técnico-Científico-Informacional). Ela promoveu a evolução das tecnologias de transporte e comunicação, de modo que a distância e as fronteiras geográficas se tornam cada vez menores. Isso contribuiu diretamente para o aumento das trocas comerciais entre os países, sobretudo para a velocidade em que essas trocas acontecem. \n\nFonte: https://www.politize.com.br/globalizacao-o-que-e/?https://www.politize.com.br/&gclid=CjwKCAjw87SHBhBiEiwAukSeUZ4BNNX3UCFy9d_9REvuXVcV1UeYxh14JpW8qQwKEDhulHl_vzyXZhoCuYUQAvD_BwE',
       },
       {
         title: 'Ideologia',
         body: 'O senso comum entende a ideologia como um simples conjunto de ideias ou uma idealização sobre algo. Porém, a ideologia é muito mais do que isso. Podemos conceituar ideologia de duas formas: a visão clássica e a visão crítica. Na visão clássica, o termo tem o significado de uma espécie de ciência capaz de organizar metodicamente e estudar rigorosamente o conjunto de ideias que formam a intelectualidade humana. Na visão crítica, a ideologia é uma ilusão criada por uma classe para manter a aparente legitimidade de um sistema de dominação.Para Marx, a ideologia tornou-se, então, instrumento de dominação da classe dominante (a burguesia) sobre a classe dominada (o proletariado). Havia, segundo o filósofo, uma infraestrutura (a economia) que mantinha o sistema capitalista de dominação. Essa infraestrutura era respaldada e legitimada por uma superestrutura, que consistiria no Estado, na política, na cultura, na religião e nas ideologias. Marx acreditava que houve a criação de um grande aparato ideológico para fazer parecer que a manutenção e o predomínio dos interesses da burguesia sobre os interesses do proletariado era legítimo, moral e correto. Com isso, o Estado surgiu como um mecanismo de dominação com o sistema político. A cultura, a religião e a ideologia eram os meios de dominação cultural, que fazia com que o proletariado aceitasse a dominação. A ideologia era o meio de manter as pessoas calmas por meio de uma ilusão: a de que o capitalismo e a propriedade privada eram meios justos.\n\nFonte: https://brasilescola.uol.com.br/filosofia/ideologia.htm',
       },
       {
         title: 'Imperialismo',
         body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
       },
       {
         title: 'Indústria Cultural',
         body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
       },
       {
         title: 'Liberalismo',
         body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
       },
        {
         title: 'Poder',
         body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
       },
        {
         title: 'Raça',
         body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
       },
        {
         title: 'Relativização',
         body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
       },
        {
         title: 'Sexualidade',
         body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
       },


     ],
   };


 
   render() {
  
    return (
       <View style={styles.container}>
         <ImageBackground source={require('./assets/img/bg-dicionario.png')} style={styles.img}>

         <Image  source={require('./assets/img/manual.png')} />

           <ScrollView style={{ alignSelf: 'stretch', marginTop:55, marginBottom:140, }}>

              <Text style={styles.texto1} >
              Por que existir um Manual de Linguagem Cidadã?

              </Text>
              <Text style={styles.txt2} >
              O Manual de Linguagem Cidadã nasceu a partir de uma inquietação relacionada ao uso legítimo, pertinente e não-excludente de palavras, termos e expressões, em documentos de interesse público que fazem parte da rotina escolar da Rede Estadual de Educação.

              </Text>
              <Text style={styles.txt2} >
              A ideia fundamental é que, inspirados/as pelo princípio da equidade, possamos utilizar, nos textos produzidos pelas escolas e pelas instituições públicas, uma linguagem plural, inclusiva e não-violenta.
              </Text>
              <Text style={styles.txt2} >
              É importante destacar que esse material é um instrumento facilitador e orientador. Afinal, todas e todos nós estamos aprendendo!
              </Text>


              <Text style={styles.texto1 } >
              Orientações
              </Text>

              <Text style={styles.texto1} >
              

              1- Ênfase na equidade de gênero e na inclusão
      
              </Text>

              <Text style={styles.txt2} >
              - Uso de termos ou vocábulos que contemplem expressões genéricas para se referir à coletividade.	
              Ex: pessoa, população, humanidade, direção, assessoria, corpo docente, equipe médica.

              </Text>


              <Text style={styles.txt2} >
              - Indicação das formas feminina e masculina em substituição à predominância da forma masculina. 
              Ex: Em vez de "Reunião de pais e professores”, substituta por “Reunião de mães, pais, professoras e professores” ou "Reunião de famílias e docentes".
              Ex: Este é um direito básico que deve ser garantido a toda cidadã e a todo cidadão.

              </Text>
              <Text style={styles.txt2} >
              - Indicação das formas feminina e masculina por meio de uso de artigo ou pronome, quando o nome for comum de dois gêneros.
              Ex.: a/o cientista, o paciente ou a paciente, o/a estudante, o/a jovem, o/a bolsista etc.
              </Text>

              <Text style={styles.txt2} >
              - Observância do nome social de estudantes, professoras, professores, funcionárias e funcionários no Sistema Saber e nos crachás de identificação.
              </Text>


              <Text style={styles.texto1} >
              

              2- Não utilização de termos ou expressões estigmatizantes
      
              </Text>

              <Text style={styles.txt2} >
              - É essencial que termos e expressões que foram comuns na oralidade e em alguns textos escritos não sejam mais utilizados, pois trazem consigo profundas marcas de desrespeito, exclusão e violência. Desse modo, é preferível que se opte por uma linguagem que traduza respeito e seja adequada ao contexto.

              </Text>
              <Text style={styles.txt2} >
              Exemplos:
              </Text>


              <Text style={styles.txt2} >
             - Você pode substituir "portador de deficiência, portador de necessidades especiais, deficiente, inválido" por "pessoa com deficiência".


              </Text>
              <Text style={styles.txt2} >
             - Você pode substituir "necessidades especiais" por "necessidades específicas".

              </Text>

              <Text style={styles.txt2} >
             - Não utilize expressões como "dia de branco", "serviço de preto", "a coisa tá preta", "mercado negro", "lista negra", "inveja branca", dentre outras expressões que são eivadas de racismo.
              </Text>
                
                <Text style={styles.texto1} >
                3- Pluralidade e diversidade também devem estar presentes na comunicação visual
      
              </Text>

              <Text style={styles.txt2} >
              - Ao criar peças gráficas para as redes sociais da escola, é fundamental ter atenção a qual fenótipo ou aparência está sendo referenciado na imagem. Será que aquele desenho, que representa uma pessoa, representa o público de estudantes da escola?
              </Text>
 <Text style={styles.txt2} >
Levando em consideração a necessidade de se incorporar uma linguagem cotidiana respeitosa, não violenta e inclusiva, oferecemos aqui um Manual de Linguagem Cidadã, contendo um dicionário de conceitos das ciências humanas e sociais que podem servir a todes para a construção de uma sociedade mais justa e igualitária através da educação.
 </Text>
 <Text style={styles.txt2} >
Temos o intuito de sempre atualizar e alimentar esse material para o enriquecimento das nossas visões de mundo. Aproveitem!
 </Text>


             {
               this.state.contents
                 ? this.state.contents.map((param, i) => {
                   return (
                     <DropDownItem
                       key={i}
                       style={styles.dropDownItem}
                     
                       contentVisible={false}
                       invisibleImage={IC_ARR_DOWN}
                       visibleImage={IC_ARR_UP}
                       header={
                         <View style={styles.header}>
                           <Text style={{
                            
                             fontSize: 16,
                             color: 'blue',
                           }}>{param.title}</Text>
                         </View>
                       }
                     >
                       <Text style={[
                         styles.txt,
                         {
                           fontSize: 20,
                          textAlign:"justify",
                         },
                       ]}>
                         {param.body}
                       </Text>
                     </DropDownItem>
                   );
                 })
                 : null
             }
             <View style={{ height: 96 }} />
           </ScrollView>
         </ImageBackground>
       </View> 
     ); 
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
     
   },

   header: {
     width: '100%',
     paddingVertical: 8,
     paddingHorizontal: 12,
     flexWrap: 'wrap',
     flexDirection: 'row',
     alignItems: 'center',
   },

   
   headerTxt: {
     fontSize: 12,
     color: 'rgb(74,74,74)',
     marginRight: 60,
     flexWrap: 'wrap',
   },
   txt: {
     fontSize: 14,
   },

    txt2: {
    textAlign:"justify",
    fontSize: 20,
    marginLeft:10,
    marginRight:15,
    marginBottom:10,
    color: "white",
   },
 texto1: {
    textAlign:"justify",
    fontSize: 20,
    marginLeft:10,
    marginRight:15,
    marginBottom:10,
    color: "white",
    fontWeight:"bold",
   },

   img:{
    flex: 1,
    alignItems: "center",
    
  },

   
 });