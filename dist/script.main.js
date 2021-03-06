$(document).ready(function () {
  function a(d, b, ...e) {
    if ("string" != typeof d)
      throw Error("Argument 'htmlString' is required and must be a string");
    let c = document.createElement(d);
    if ("object" == typeof b)
      for (let a in b)
        "on" === a.substring(0, 2)
          ? c.addEventListener(a.substring(2).toLowerCase(), b[a])
          : c.setAttribute(a, b[a]);
    return (
      e.forEach(function (a) {
        let b;
        (b = a.constructor.name.includes("Element")
          ? a
          : document.createTextNode(a)),
          c.appendChild(b);
      }),
      c
    );
  }
  function i(a = 50) {
    let b =
      "Lorem ipsum dolor amet tousled brooklyn meditation, polaroid offal kale chips raw denim tumblr succulents jianbing listicle. Man braid godard VHS freegan bespoke fixie XOXO ramps lo-fi edison bulb prism gochujang photo booth. Messenger bag bicycle rights trust fund franzen street art mixtape helvetica, sriracha dreamcatcher live-edge microdosing. Whatever cliche neutra iceland chambray, beard narwhal pop-up health goth readymade palo santo forage live-edge 3 wolf moon echo park edison bulb, viral iceland bicycle rights post-ironic celiac typewriter kinfolk mumblecore tilde palo santo. Dreamcatcher cred cliche, keffiyeh intelligentsia forage vice locavore aesthetic yr. Vexillologist shabby chic fixie, air plant helvetica health goth kickstarter four loko jean shorts tote bag green juice street art beard farm-to-table. Enamel pin jianbing photo booth, YOLO pour-over bushwick next level fingerstache vice retro disrupt cloud bread. Gastropub umami distillery chia food truck adaptogen. Forage hexagon helvetica kogi squid. Crucifix health goth bespoke typewriter fam hexagon helvetica, vice dreamcatcher chillwave tumeric. Keffiyeh aesthetic XOXO venmo live-edge kale chips mlkshk wolf williamsburg hella yr locavore. Tumblr unicorn chillwave, edison bulb occupy offal sartorial gastropub kickstarter. Bitters swag chartreuse single-origin coffee PBR&B post-ironic migas activated charcoal before they sold out iPhone seitan lumbersexual tofu tumeric selvage. Shoreditch hashtag literally, af intelligentsia crucifix sustainable +1 chambray adaptogen. Crucifix retro fixie knausgaard. Photo booth asymmetrical seitan, pug marfa tattooed roof party tacos gochujang woke kale chips vice organic. Street art mumblecore trust fund, normcore single-origin coffee meggings neutra tacos fam. Woke chia asymmetrical try-hard cloud bread hexagon leggings kogi taiyaki. Seitan humblebrag tote bag keytar YOLO art party. Semiotics cliche schlitz shaman, waistcoat chartreuse activated charcoal XOXO post-ironic helvetica messenger bag air plant vape sartorial. Typewriter thundercats direct trade edison bulb lomo la croix trust fund. Tote bag tofu lo-fi blue bottle. Drinking vinegar lyft messenger bag, leggings tofu 90's bitters four loko mustache sriracha pabst shabby chic humblebrag glossier. Meh skateboard yuccie tattooed adaptogen gastropub post-ironic put a bird on it green juice la croix hot chicken ennui cray dreamcatcher neutra. Chia semiotics art party fixie shaman echo park palo santo flexitarian. Letterpress retro chillwave, williamsburg palo santo fashion axe raclette lumbersexual keytar yr plaid ugh. Godard everyday carry twee, roof party affogato williamsburg photo booth. Irony lumbersexual letterpress, trust fund raclette wayfarers art party. Flannel bushwick yr tattooed."
        .split(/\s+/)
        .slice(0, a)
        .join(" ");
    return b;
  }
  if (window.location.href.indexOf("schedule") > -1) {
    let e = new Date();
    e.getDate();
    let b = e.getMonth(),
      c = e.getFullYear(),
      f = [
        {
          title: "Vegan Day",
          start: new Date(c, b + 1, 20),
          description: `Vegans unite! At this event, we'll be celebrating with vegan food from around the globe. With so many delicious vegan cuisine options, it's hard to pick one. What are you hungry for? Let us share with you!
        Veganism is a lifestyle choice???we're passionate about creating healthy and delicious food products without harming the environment, so please spread the word about our festival and about our work!`,
          image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        },
        {
          title: "Harvest Festival",
          start: new Date(c, b + 1, 20),
          image:
            "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        },
        {
          title: "Bacon Day",
          start: new Date(c, b + 1, 20),
          description: `Today's all about bacon! We'll be serving up the best tasting bacon around town! Let's all get excited about bacon together!
        As an appetizer, grab a side of our delicious BBQ pulled pork and pick up a delicious side of our homemade slaw and sauce! There will be bacon everywhere!!`,
          image:
            "https://images.unsplash.com/photo-1528607929212-2636ec44253e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
        },
        {
          title: "Fry-day",
          description: `You bring it, we fry it. Everything tastes better fried! Whether it's your favorite sponge cake or a refreshing afternoon snack,
        prepare to shock your tastebuds.`,
          start: new Date(c, b + 1, 21),
          image:
            "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
        },
        {
          title: "Pizza Party!",
          description:
            "This event is devoted to all those pizza lovers out there. Come enjoy fresh from the oven pizza and learn tips on making pizza at home from the pros!",
          start: new Date(c, b + 1, 22),
          image:
            "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
        },
        {
          title: "Pasta Bonanza",
          description: "All things pasta.",
          start: new Date(c, b + 1, 22),
          image:
            "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
        },
        {
          title: "Fruity Foods!",
          description:
            "We will be showcasing dishes where fruits are a primary ingredient. Come learn how you can add more fruits into your diet!",
          start: new Date(c, b + 1, 22),
          image:
            "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
        },
        {
          title: "Veggie Mix Up",
          description:
            "We will be showcasing great dishes that have plenty of veggies and proteins! This is for all those out there who love food, but want to get more vegetables in their diets!",
          start: new Date(c, b + 1, 23),
          image:
            "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
        },
        {
          title: "Fry-day",
          description:
            "You bring it, we fry it....again. This event is always a huge hit, so we hold it twice!!",
          start: new Date(c, b + 1, 23),
          image:
            "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
        },
      ],
      g = document.querySelector("#page");
    function h(b) {
      let c = b.map((b) =>
        a(
          "div",
          {
            class: "card-body clickable",
            onClick: () =>
              (function (a) {
                let b = dateConverter(a.start);
                localStorage.setItem(
                  "currentEvent",
                  JSON.stringify({
                    title: a.title,
                    subtitle: b,
                    description: a.description,
                    image: a.image,
                  })
                ),
                  (window.location.href = "events.html");
              })(b),
          },
          a("h5", { class: "card-title" }, b.title || ""),
          a("p", { class: "card-text" }, b.description || i()),
          a("hr")
        )
      );
      return c;
    }
    let j = a(
        "div",
        { class: "container mt-5" },
        a(
          "div",
          { class: "card mb-5" },
          a("h5", { class: "card-header" }, "Day 1"),
          ...h(f.slice(0, 3))
        )
      ),
      k = a(
        "div",
        { class: "container" },
        a(
          "div",
          { class: "card mb-5" },
          a("h5", { class: "card-header" }, "Day 2"),
          ...h(f.slice(3, 6))
        )
      ),
      l = a(
        "div",
        { class: "container" },
        a(
          "div",
          { class: "card mb-5" },
          a("h5", { class: "card-header" }, "Day 3"),
          ...h(f.slice(6, 9))
        )
      );
    g.appendChild(j), g.appendChild(k), g.appendChild(l);
  }
  if (window.location.href.indexOf("event") > -1) {
    let d = JSON.parse(localStorage.getItem("currentEvent")) || {
        title: "Title Placeholder",
        subtitle: "",
        description: "",
      },
      m = document.querySelector("#page"),
      n = a(
        "div",
        { class: "container" },
        a(
          "div",
          { class: "card mb-3" },
          a("img", {
            class: "card-img-top",
            style: "width: 5px",
            src: d.image || "https://via.placeholder.com/350x150",
          }),
          a(
            "div",
            { class: "card-body" },
            a("h1", { class: "card-title" }, d.title || ""),
            a("h2", { class: "text-muted" }, d.subtitle || ""),
            a("p", { class: "card-text mt-3" }, d.description || i(100)),
            a(
              "a",
              { class: "btn btn-primary", href: "tickets.html" },
              "Buy Tickets"
            )
          )
        )
      );
    m.appendChild(n);
  }
  if (
    ((dateConverter = function (b) {
      let a = new Date(b),
        c = a.getFullYear(),
        d = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ][a.getMonth()],
        e = a.getDate();
      return d + " " + e + ", " + c;
    }),
    window.location.href.indexOf("tickets") > -1)
  ) {
    let o = document.getElementById("purchaseBtn"),
      p = document.getElementById("purchaseEmail"),
      q = document.querySelector(".modal-content"),
      r = document.querySelector(".modal-body"),
      s = document.querySelector(".modal-footer");
    o.addEventListener("click", function () {
      q.removeChild(r),
        q.removeChild(s),
        q.append(
          a(
            "div",
            { class: "modal-body" },
            a(
              "h5",
              { class: "modal-title" },
              `Thanks for requesting a ticket purchase! We will send an email to ${p.value} to complete the order form!`
            )
          )
        );
    });
  }
  [
    {
      title: "We travel all over the US",
      subtitle: "Check out our schedule!",
      img: "./assets/img/food-table.jpg",
      btnText: "View Schedule",
      btnUrl: "schedule.html",
    },
    {
      title: "Our food is seriously the bomb!",
      subtitle: "What are you waiting for?",
      img: "./assets/img/grill.jpg",
      btnText: "Purchase Tickets",
      btnUrl: "tickets.html",
    },
  ].forEach((a, b) => {
    $(".carousel-inner").append(`
  <div class="carousel-item fullscreen-carousel" style="background-image: url('${a.img}')">
    <div class="d-flex h-100 align-items-center justify-content-center carousel-caption">
        <div class="container">
          <div class="row align-items-center justify-content-center">
              <h2 class="display-4 mb-2">${a.title}</h2>
          </div>
          <div class="row align-items-center justify-content-center"> 
            <h3>${a.subtitle}</h3>
          </div>
          <div class=" mt-4 row align-items-center justify-content-center"> 
            <a class="btn btn-primary" href="${a.btnUrl}">
                ${a.btnText}
            </a>
          </div>
        </div>
    </div>
  </div>`);
  });
});
