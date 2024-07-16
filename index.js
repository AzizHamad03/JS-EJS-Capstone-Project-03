import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
let blogCodeList = [
    {
      name: 'Abedalaziz Hamad',
      topics: 'Health',
      title: 'Dummy 1',
      body: 'Bibendum at varius vel pharetra vel turpis nunc \r\n' +
        'eget lorem. Eu facilisis sed odio morbi quis \r\n' +
        'commodo odio. Id venenatis a condimentum vitae \r\n' +
        'sapien pellentesque habitant morbi tristique. \r\n' +
        'Mollis aliquam ut porttitor leo a diam. Gravida \r\n' +
        'neque convallis a cras semper auctor. Vulputate \r\n' +
        'odio ut enim blandit volutpat maecenas volutpat.\r\n' +
        '\r\n' +
        'Malesuada fames ac turpis egestas integer eget. \r\n' +
        'Vulputate odio ut enim blandit. Fermentum dui \r\n' +
        'faucibus in ornare. Nunc sed blandit libero \r\n' +
        'volutpat sed cras ornare arcu dui. Quam vulputate \r\n' +
        'dignissim suspendisse in. Sed arcu non odio euismod \r\n' +
        'lacinia at quis risus. Id neque aliquam vestibulum \r\n' +
        'morbi. Luctus venenatis lectus magna fringilla.\r\n' +
        '\r\n' +
        'Parturient montes nascetur ridiculus mus mauris \r\n' +
        'vitae. Est ullamcorper eget nulla facilisi etiam \r\n' +
        'dignissim diam. Lacus vestibulum sed arcu non. Vel \r\n' +
        'pretium lectus quam id leo in vitae turpis massa. \r\n' +
        'Sit amet justo donec enim diam vulputate ut.\r\n' +
        '\r\n' +
        'Pellentesque elit ullamcorper dignissim cras \r\n' +
        'tincidunt lobortis feugiat vivamus. Nulla facilisi \r\n' +
        'cras fermentum odio eu. Sollicitudin ac orci \r\n' +
        'phasellus egestas tellus rutrum tellus pellentesque \r\n' +
        'eu. Id semper risus in hendrerit gravida. Nunc \r\n' +
        'congue nisi vitae suscipit tellus. Eget dolor morbi \r\n' +
        'non arcu risus. Sed adipiscing diam donec \r\n' +
        'adipiscing. Amet mattis vulputate enim nulla \r\n' +
        'aliquet porttitor lacus luctus accumsan. Sed \r\n' +
        'viverra ipsum nunc aliquet. Velit laoreet id donec \r\n' +
        'ultrices tincidunt arcu non sodales.'
    },
    {
      name: 'Aziz',
      topics: 'Travel',
      title: 'Dummy2',
      body: 'Volutpat est velit egestas dui id ornare arcu. Quis \r\n' +
        'varius quam quisque id diam vel quam elementum. \r\n' +
        'Ultrices eros in cursus turpis massa tincidunt. \r\n' +
        'Potenti nullam ac tortor vitae purus. Rhoncus \r\n' +
        'aenean vel elit scelerisque mauris pellentesque \r\n' +
        'pulvinar. Eget nunc scelerisque viverra mauris. Mi \r\n' +
        'tempus imperdiet nulla malesuada pellentesque elit \r\n' +
        'eget gravida.\r\n' +
        '\r\n' +
        'Facilisi nullam vehicula ipsum a arcu. Imperdiet \r\n' +
        'massa tincidunt nunc pulvinar. Scelerisque felis \r\n' +
        'imperdiet proin fermentum. Id neque aliquam \r\n' +
        'vestibulum morbi blandit cursus risus at. Tristique \r\n' +
        'sollicitudin nibh sit amet commodo nulla facilisi. \r\n' +
        'Lectus magna fringilla urna porttitor rhoncus dolor \r\n' +
        'purus non enim. Semper viverra nam libero justo \r\n' +
        'laoreet sit amet cursus. Pellentesque elit eget \r\n' +
        'gravida cum. Euismod nisi porta lorem mollis \r\n' +
        'aliquam ut porttitor.\r\n' +
        '\r\n' +
        'Turpis massa sed elementum tempus egestas sed. \r\n' +
        'Netus et malesuada fames ac turpis egestas sed \r\n' +
        'tempus. Vitae ultricies leo integer malesuada nunc \r\n' +
        'vel. Enim nulla aliquet porttitor lacus luctus \r\n' +
        'accumsan tortor. In ante metus dictum at tempor. \r\n' +
        'Posuere morbi leo urna molestie at elementum eu \r\n' +
        'facilisis sed. Ut enim blandit volutpat maecenas. \r\n' +
        'Est lorem ipsum dolor sit amet consectetur.\r\n' +
        '\r\n' +
        'Et molestie ac feugiat sed lectus vestibulum mattis \r\n' +
        'ullamcorper velit. Non diam phasellus vestibulum \r\n' +
        'lorem sed risus ultricies. Vitae turpis massa sed \r\n' +
        'elementum tempus egestas. Lacus vel facilisis \r\n' +
        'volutpat est velit egestas dui. Nunc consequat \r\n' +
        'interdum varius sit amet mattis vulputate enim \r\n' +
        'nulla. Enim neque volutpat ac tincidunt vitae. \r\n' +
        'Platea dictumst quisque sagittis purus sit amet \r\n' +
        'volutpat consequat mauris. Laoreet sit amet cursus \r\n' +
        'sit amet dictum sit amet justo.\r\n' +
        '\r\n' +
        'Arcu dictum varius duis at consectetur lorem donec \r\n' +
        'massa sapien. Habitant morbi tristique senectus et \r\n' +
        'netus. Gravida neque convallis a cras semper auctor \r\n' +
        'neque vitae tempus. Aliquam faucibus purus in massa \r\n' +
        'tempor nec feugiat nisl pretium. Lorem sed risus \r\n' +
        'ultricies tristique nulla aliquet. Elit ullamcorper \r\n' +
        'dignissim cras tincidunt.'
    }
  ];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index.ejs", {
        blogCodeList: blogCodeList,
    });
});

app.post("/newBlog", (req, res) => {
    res.render("addNew.ejs");
});

app.post("/", (req, res) => {
    if (req.body.name === "" || req.body.title === "" || req.body.body === "") {
        res.redirect("/");
    } else {
        blogCodeList.push(req.body);
        res.redirect("/");
    }
    console.log(blogCodeList);
});
app.get("/editBlog/:id", (req, res) => {
    const blogId = req.params.id;
    const blog = blogCodeList[blogId];
    res.render("edit.ejs", {
        blog: blog,
        blogId: blogId,
    });
});
app.post("/editBlog/:id", (req, res) => {
    const blogId = req.params.id;
    blogCodeList[blogId] = req.body;
    res.redirect("/");
});
app.post("/removeBlog/:id", (req, res) => {
    const blogId = req.params.id;
    blogCodeList.splice(blogId, 1);
    res.redirect("/");
});
app.listen(port, () => {
    console.log(`Listening to Port ${port}.`);
});
