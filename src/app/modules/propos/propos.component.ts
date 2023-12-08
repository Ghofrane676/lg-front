import { Component } from '@angular/core';

@Component({
  selector: 'app-propos',
  templateUrl: './propos.component.html',
  styleUrls: ['./propos.component.scss']
})
export class ProposComponent {
  carreauxData = [
    {
      numero: 1,
      titre: "UNE APPROCHE HOLISTIQUE DE LA GESTION D'ENTREPRISE",
      descriptionCourte: "Chez LG Groupe, nous croyons en une approche holistique de la gestion d'entreprise. Nous comprenons que chaque aspect de votre ",
      descriptionComplete: 'Ceci est une description complète de l\'élément 1. Vous pouvez masquer ou afficher le texte en cliquant sur "Lire plus".',
      showMore: false
    },
    {
      numero: 2,
      titre: 'SUPPORT ADMINISTRATIF DE PREMIER ORDRE',
      descriptionCourte: "Nos services de support administratif sont conçus pour alléger le fardeau des tâches administratives de votre entreprise . Nous nous",
      descriptionComplete: "chargeons des tâches fastidieuses telles que la facturation, et la tenue de registres, vous permettant ainsi de vous concentrer sur ce qui compte vraiment pour votre entreprise.",
      showMore: false
    },
    {
      numero: 3,
      titre: 'GESTION DES RESSOURCES HUMAINES',
      descriptionCourte: "Les employés sont l'atout le plus précieux de toute entreprise. Notre service de gestion des ressources humaines vous aide à recruter, à",
      descriptionComplete: "former, et à gérer efficacement votre personnel. Nous pouvons également vous aider à développer des politiques et des procédures RH solides pour assurer le bien-être de vos employés.",
      showMore: false
    },
    {
      numero: 4,
      titre: 'MISE À DISPOSITION DE RESSOURCES HUMAINES',
      descriptionCourte: "La mise à disposition de ressources humaines au sein du LG Group est un pilier essentiel pour répondre aux besoins en personnel",
      descriptionComplete: "diversifiés de l'entreprise, assurant ainsi sa compétitivité à l'échelle mondiale. Cette approche inclut le recrutement, la formation et la gestion du personnel, contribuant à maintenir la qualité des produits et services, à stimuler l'innovation et à soutenir le développement professionnel des employés.",
      showMore: false
    },
    {
      numero: 5,
      titre: 'UNE ÉQUIPE DÉVOUÉE',
      descriptionCourte:"Chez LG Groupe, nous sommes fiers de notre équipe de professionnels qualifiés et expérimentés. Chacun de nos membres est dévoué à fournir un service de",
      descriptionComplete: "qualité supérieur à nos clients. C’est cet esprit d’équipe et notre expertise qui nous démarque de la concurrence. ",
      showMore: false
    },
    {
      numero: 6,
      titre: 'DES SOLUTIONS PERSONNALISÉES',
      descriptionCourte:"Nous comprenons que chaque client est unique., Que vous connaissiez une croissance rapide ou ayez des besoins saisonniers, nous nous adaptons à vos besoins évolutifs",
      descriptionComplete:"Nous sommes flexibles, adaptant nos services à votre flux de travail et à vos exigences spécifiques pour une solution parfaitement ajustée à vos besoins.",
      showMore: false
    },

    
  ];

  toggleDescription(carreau: any) {
    carreau.showMore = !carreau.showMore;
  }
  toggleActive(item: any): void {
    item.isActive = !item.isActive;
  }

}