(function($) {

  $(function() {

    var $content = $("#content");
    var $cardsContainer = $("<ul>").addClass("cards-container").appendTo($content);

    var pairs = [
      {id: "summary", icon: "user", title: "Summary"},
      {id: "education", icon: "graduation-cap", title: "Education"},
      {id: "work", icon: "briefcase", title: "Work experience"},
      {id: "projects", icon: "flask", title: "Projects"},
      {id: "skills", icon: "file-certificate", title: "Skills"},
      {id: "contacts", icon: "id-card", title: "Contacts"},
    ];
    var cards = [];
    cards.fill(null, 0, pairs.length * 2 - 1);

    pairs.forEach(function(pair) {
      var idx = 0;
      while (cards[idx] != null) {
        idx = Math.floor(Math.random() * pairs.length * 2);
      }
      cards[idx] = pair;
      while (cards[idx] != null) {
        idx = Math.floor(Math.random() * pairs.length * 2);
      }
      cards[idx] = pair;
    });

    cards.forEach(function(card) {
      var $card = $("<li>").addClass("card").appendTo($cardsContainer);
      $("<div>")
        .addClass("card-face")
        .html("<i class=\"fad fa-" + card.icon + "\"></i> " + card.title)
        .appendTo($card);
      $("<div>")
        .addClass("card-back")
        .html("<i class=\"fad fa-sparkles\"></i>")
        .appendTo($card);
    });
  });

})(jQuery);
