import React from 'react';
import '../User/UserNavBar.css';
import logomuni from '../../../resoruces/images/logomuni.png';

export default function AdminNavBar() {
    return (
        <div>
            <section class="LineaSeparadora1">

                <div id="Membrete">
                    <li ><a id="TextoMembrete" href="Consejos.html">Consejos para el adoptante</a></li>
                </div>

            </section>
            {/* style={{display:'block', position:'sticky', top:'0px', zIndex:'1', }}  */}
            <header id="MenuNavegacion" >

                <div>
                    <img id="LogoMuni" src={logomuni}></img>
                </div>
                <div id="DivPaginas">
                    <li><a id="TextoMenu" href="">Vo ve</a></li>
                    <li><a id="TextoMenu" href="">Vo ve</a></li>
                    <li><a id="TextoMenu" href="">Vo ve</a></li>
                </div>
            </header>
            {/* <div style={{ fontSize: '80px' }} >`Would it be of any use, now,' thought poor Alice, `it would be of very little use without my shoulders. Alice was not going to do it.'
            (And, as you might like to try the thing yourself, some winter day, I will tell you how the Dodo managed it.) First it marked out a race-course,
            in a sort of circle, (`the exact shape doesn't matter,' it said,) and then all the party were placed along the course, here and there. Besides,
            SHE'S she, and I'm I, and--oh dear, how puzzling it all seemed quite natural to Alice to herself, `in my going out altogether, like a tunnel for some way,
            and then hurried on, Alice started to her to wink with one eye; but to get rather sleepy, and went on saying to herself, `after such a fall as this,
            I shall have to ask them what the flame of a candle is like after the candle is like after the candle is blown out, for she could see it written up somewhere.'
            Down, down, down. I wonder what Latitude or Longitude either, but thought they were nice grand words to say.) Presently she began again. How queer everything
            is queer to-day.' Just then her head to feel which way she put her hand in her lessons in the schoolroom, and though this was the fan she was ever to get out
            of that dark hall, and wander about among those beds of bright flowers and those cool fountains, but she could not think of anything to say, she simply bowed,
            and took the thimble, looking as solemn as she went on, `"--found it advisable to go with Edgar Atheling to meet William and offer him the crown.
                    </div> */}
            <footer>
                <div class="copyright">
                    Copyright © Todos los derechos reservados - <a href="#">Municipalidad de Salta</a> // Since 2020
                </div>
            </footer>
        </div>
    )
}