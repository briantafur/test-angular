import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '¡Te Amo!';
  response$;
  love = `Mi amor,
  En un mundo donde reina tanta oscuridad jamás imaginé encontrar una luz tan hermosa y renovadora, una luz que Dios me permitió tener en mi vida… esa luz, mi amor, eres tú.'
  Porque le diste a mi vida un sentido maravilloso sobre lo que es el amor; desde aquel momento en que te vi por primera vez y que generaste algo en mi interior que no podía comprender, ese sentimiento que al día de hoy pude descubrir y darme cuenta que era mi corazón sintiendo el verdadero amor. Sin dudas son muchas las batallas que he luchado para estar contigo y muchas otras que hemos tenido que luchar juntos, pero aquí nos tienen, viviendo algo que tiene el valor más grande en el mundo y que no lo cambiaría por nada más.
 Quiero decirte que ningún día difícil me ha hecho creer menos en el amor que siento, al contrario, he encontrado en ellos retos para convertirme en mejor persona y poder dedicar a tu vida solo lo mejor que exista en mi corazón, porque es allí donde podemos ser testigos de lo que nos une al otro; como promesa, quiero decirte que mi corazón te va a pertenecer y nunca existirá maldad en él para ti.
  A Dios le doy gracias por cada uno de los días que hemos pasado juntos, los buenos y no tan buenos siempre que sean contigo, le doy gracias también por éste momento, porque me permite compartir mi vida al lado de la mujer que hace latir mi corazón con fuerza y a Él le pido por los días venideros, días en los que espero que nuestro amor crezca cada vez más, que todo sea puro, sincero y que nos permita demostrarlo ante cualquiera que se cruce por nuestro camino.
  Te pido perdón por aquellas veces en las que te haya lastimado, y te doy gracias por seguir a mi lado, creando en mí, las más grandes y lindas alegrías. 
  ¡Aquí y ahora quiero que recuerdes lo mucho que te he amado, que te amo con toda mi alma y que te amaré hasta mi último suspiro!
  `;

  constructor(private postService: PostService) {
    this.response$ = postService.getPosts();

  }

}
