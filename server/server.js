const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();
var path=require('path');
var mysql = require('mysql');
const e = require('express');
const imagePath='D:\\projects\\FullStack\\Crazzle_Images';
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Crazzle1234',
  database: 'crazzle'
})
const storage = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null,  `${imagePath}`);},
    filename: function(req,file,cb){
      const ext = file.mimetype.split("/")[1];
      cb(null,`${Date.now()}.${ext}`);
    }
  });
  const upload = multer({
    storage: storage
  });

app.use(express.json());       
app.use(express.static(`D:\\projects\\FullStack\\Crazzle_Images`));




app.get('/api/top_news',cors(), function(req,res){
  connection.query('SELECT id,title,author FROM (SELECT * FROM crazzle.articles ORDER BY id DESC LIMIT 3) sub ORDER BY id ASC', function (err, rows, fields) {
      res.send(rows);
    })
});

connection.query('SELECT id,title_pic FROM (SELECT * FROM crazzle.articles ORDER BY id DESC LIMIT 3) sub ORDER BY id ASC', function (err, rows, fields) {
    if (err) throw err;
    const getRow = num => {
      return rows[num];
    }
   
    (async function(){ 
    for (i in rows) {
      const row = await getRow(i);
      let file=path.join(imagePath,row.title_pic)
      app.get(`/api/top_news/pictures/${row.id}`,cors(), function(req,res){
          res.sendFile(file);
      });
    }
    })();
  })

  app.get('/api/top_announcements',cors(), function(req,res){
    connection.query('SELECT ann_id,wp_name,ann_author,ann_description,ann_publication_date FROM crazzle.announcements INNER JOIN crazzle.working_persons on ann_author=wp_id ORDER BY ann_publication_date DESC LIMIT 10;', function (err, rows, fields) {
      res.send(rows)
    })
  });
  connection.query('select * from (select crazzle.announcements.ann_id,crazzle.announcements.ann_author,crazzle.announcements.ann_description,crazzle.working_persons.wp_profile_pic from crazzle.announcements inner join crazzle.working_persons on crazzle.announcements.ann_author=crazzle.working_persons.wp_name order by ann_id desc limit 2) as new_table order by ann_id asc', function (err, rows, fields) {
    if (err) throw err;
    const getRow = num => {
      return rows[num];
    }
    
    (async function(){ 
    for (i in rows) {
      const row = await getRow(i);
      let file=path.join(imagePath,row.wp_profile_pic);
      app.get(`/api/announcements/${row.ann_id}/pictures`,cors(), function(req,res){
          res.sendFile(file);
      });
      app.get(`/api/announcements/${row.ann_id}`,cors(), function(req,res){
        res.send(row);
    });
    }
    })();
  })

  app.get('/api/top_discussions',cors(), function(req,res){
    connection.query('SELECT * FROM (SELECT * FROM crazzle.discussions ORDER BY dis_id DESC LIMIT 4) sub ORDER BY dis_id ASC', function (err, rows, fields) {
      res.send(rows);
    })
  });
  connection.query('SELECT dis_id,dis_img FROM crazzle.discussions', function (err, rows, fields) {
    const getRow = num => {
      return rows[num];
    }
    (async function(){ 
    for (i in rows) {
      const row = await getRow(i);
      if(row.dis_img!=null){
        let file=path.join(imagePath,row.dis_img);
      app.get(`/api/discussions/pictures/${row.dis_id}`,cors(), function(req,res){
          res.sendFile(file);
      });
    }
    }
    })();
  })
  app.get('/api/products/tv_shows/most_popular',cors(), function(req,res){
    connection.query('SELECT * FROM crazzle.tv_shows ORDER BY tv_ratings_votes DESC LIMIT 10', function (err, rows, fields) {
      res.send(rows);
    })
  });
  app.get('/api/products/tv_shows/newest',cors(), function(req,res){
    connection.query('SELECT * FROM crazzle.tv_shows ORDER BY tv_release_year DESC LIMIT 10', function (err, rows, fields) {
      res.send(rows);
    })
  });
  app.get('/api/products/tv_shows/best',cors(), function(req,res){
    connection.query('SELECT tv_id,tv_title,tv_description,tv_release_year,tv_ending_year,tv_episode_length,tv_ratings_sum,tv_ratings_votes FROM crazzle.tv_shows ORDER BY tv_ratings_sum/tv_ratings_votes DESC LIMIT 10;', function (err, rows, fields) {
      res.send(rows);
    })
  });



  app.get('/api/products/films/most_popular',cors(), function(req,res){
    connection.query('SELECT * FROM crazzle.films ORDER BY film_rating_votes DESC LIMIT 10', function (err, rows, fields) {
      res.send(rows);
    })
  });
  app.get('/api/products/films/newest',cors(), function(req,res){
    connection.query('SELECT * FROM crazzle.films ORDER BY film_release_year DESC LIMIT 10', function (err, rows, fields) {
      res.send(rows);
    })
  });
  app.get('/api/products/films/best',cors(), function(req,res){
    connection.query('SELECT film_id,film_title,film_description,film_release_year,film_length,film_rating_sum,film_rating_votes FROM crazzle.films ORDER BY film_rating_sum/film_rating_votes DESC LIMIT 10;', function (err, rows, fields) {
      res.send(rows);
    })
  });

  app.get('/api/products/books/most_popular',cors(), function(req,res){
    connection.query('SELECT * FROM crazzle.books ORDER BY book_ratings_votes DESC LIMIT 10', function (err, rows, fields) {
      res.send(rows);
    })
  });
  app.get('/api/products/books/newest',cors(), function(req,res){
    connection.query('SELECT * FROM crazzle.books ORDER BY book_release_year DESC LIMIT 10', function (err, rows, fields) {
      res.send(rows);
    })
  });
  app.get('/api/products/books/best',cors(), function(req,res){
    connection.query('SELECT * FROM crazzle.books ORDER BY book_ratings_sum/book_ratings_votes DESC LIMIT 10;', function (err, rows, fields) {
      res.send(rows);
    })
  });

  app.get('/api/products/albums/most_popular',cors(), function(req,res){
    connection.query('SELECT * FROM crazzle.albums ORDER BY album_rating_votes DESC LIMIT 10', function (err, rows, fields) {
      res.send(rows);
    })
  });
  app.get('/api/products/albums/newest',cors(), function(req,res){
    connection.query('SELECT * FROM crazzle.albums ORDER BY album_release_year DESC LIMIT 10', function (err, rows, fields) {
      res.send(rows);
    })
  });
  app.get('/api/products/albums/best',cors(), function(req,res){
    connection.query('SELECT * FROM crazzle.albums ORDER BY album_rating_sum/album_rating_votes DESC LIMIT 10;', function (err, rows, fields) {
      res.send(rows);
    })
  });

  app.get('/api/discussions/most_popular',cors(), function(req,res){
    connection.query('SELECT * from crazzle.discussions ORDER BY dis_upvotes-dis_downvotes DESC LIMIT 10;', function (err, rows, fields) {
      res.send(rows);
    })
  });
  app.get('/api/discussions/newest',cors(), function(req,res){
    connection.query('SELECT * FROM crazzle.discussions ORDER BY dis_publication_date DESC LIMIT 10;', function (err, rows, fields) {
      res.send(rows);
    })
  });

  app.get('/api/announcements/newest',cors(), function(req,res){
    connection.query('SELECT ann_id,wp_name,ann_author,ann_description,ann_publication_date FROM crazzle.announcements INNER JOIN crazzle.working_persons on ann_author=wp_id ORDER BY ann_publication_date DESC LIMIT 10;', function (err, rows, fields) {
      res.send(rows);
    })
  });

  app.get('/api/news/newest',cors(), function(req,res){
    connection.query('SELECT * FROM crazzle.articles ORDER BY id DESC LIMIT 10;', function (err, rows, fields) {
      res.send(rows);
    })
  });


  connection.query('SELECT * FROM crazzle.tv_shows', function (err, rows, fields) {
    if (err) throw err;
    const getRow = num => {
      return rows[num];
    }
    (async function(){ 
    for (i in rows) {
      const row = await getRow(i);
      let file=path.join(imagePath,row.tv_poster);
      app.get(`/api/products/tv_shows/${row.tv_id}/pictures`,cors(), function(req,res){
          res.sendFile(file);
      });
      app.get(`/api/products/tv_shows/${row.tv_id}`,cors(), function(req,res){
        res.send(row);
    });
    }
    })();
  })

  connection.query('SELECT * FROM crazzle.discussions', function (err, rows, fields) {
    if (err) throw err;
    const getRow = num => {
      return rows[num];
    }
    (async function(){ 
    for (i in rows) {
      const row = await getRow(i);
      if(row.dis_img!=null){
        let file=path.join(imagePath,row.dis_img);
      app.get(`/api/discussions/pictures/${row.dis_id}`,cors(), function(req,res){
          res.sendFile(file);
      });
    }
           app.get(`/api/discussions/${row.dis_id}`,cors(), function(req,res){
        res.send(row);
    });
    app.get(`/api/discussions/${row.dis_id}/comments`,cors(), function(req,res){
      connection.query(`select * from crazzle.comments where comment_discussion=${row.dis_id};`, function (new_err, new_rows, new_fields) {
        res.send(new_rows);
      })
  });
    }
    })();
  })

  connection.query('SELECT * FROM crazzle.users', function (err, rows, fields) {
    if (err) throw err;
    const getRow = num => {
      return rows[num];
    }
    (async function(){ 
    for (i in rows) {
      const row = await getRow(i);
      if(row.user_profile_pic!=null){
        let file=path.join(imagePath,row.user_profile_pic);
      app.get(`/api/users/${row.user_id}/pictures`,cors(), function(req,res){
          res.sendFile(file);
      });
    }
           app.get(`/api/users/${row.user_id}`,cors(), function(req,res){
        res.send(row);
        console.log(row);
    });
    }
    })();
  })

  connection.query('SELECT * FROM crazzle.films', function (err, rows, fields) {
    if (err) throw err;
    const getRow = num => {
      return rows[num];
    }
    (async function(){ 
    for (i in rows) {
      const row = await getRow(i);
      let file=path.join(imagePath,row.film_poster);
      app.get(`/api/products/films/${row.film_id}/pictures`,cors(), function(req,res){
          res.sendFile(file);
      });
      app.get(`/api/products/films/${row.film_id}`,cors(), function(req,res){
        res.send(row);
    });
    }
    })();
  })

  connection.query('SELECT * FROM crazzle.books', function (err, rows, fields) {
    if (err) throw err;
    const getRow = num => {
      return rows[num];
    }
    (async function(){ 
    for (i in rows) {
      const row = await getRow(i);
      let file=path.join(imagePath,row.book_cover);
      app.get(`/api/products/books/${row.book_id}/pictures`,cors(), function(req,res){
          res.sendFile(file);
      });
      app.get(`/api/products/books/${row.book_id}`,cors(), function(req,res){
        res.send(row);
    });
    }
    })();
  })

  connection.query('SELECT * FROM crazzle.albums', function (err, rows, fields) {
    if (err) throw err;
    const getRow = num => {
      return rows[num];
    }
    (async function(){ 
    for (i in rows) {
      const row = await getRow(i);
      let file=path.join(imagePath,row.album_cover);
      app.get(`/api/products/albums/${row.album_id}/pictures`,cors(), function(req,res){
          res.sendFile(file);
      });
      app.get(`/api/products/albums/${row.album_id}`,cors(), function(req,res){
        res.send(row);
    });
    app.get(`/api/products/albums/${row.album_id}/tracklist`,cors(), function(req,res){
      res.send(row.album_tracklist);
  });
    }
    })();
  })

  connection.query('SELECT * FROM crazzle.articles', function (err, rows, fields) {
    if (err) throw err;
    const getRow = num => {
      return rows[num];
    }
    (async function(){ 
    for (i in rows) {
      const row = await getRow(i);
      let file=path.join(imagePath,row.title_pic);
      app.get(`/api/articles/${row.id}/pictures`,cors(), function(req,res){
          res.sendFile(file);
      });
      app.get(`/api/articles/${row.id}`,cors(), function(req,res){
        res.send(row);
    });
    }
    })();
  })


  connection.query('SELECT wp_id,wp_profile_pic FROM crazzle.working_persons', function (err, rows, fields) {
    if (err) throw err;
    const getRow = num => {
      return rows[num];
    }
    (async function(){ 
    for (i in rows) {
      const row = await getRow(i);
      let file=path.join(imagePath,row.wp_profile_pic);
      app.get(`/api/working_persons/${row.wp_id}/pictures`,cors(), function(req,res){
          res.sendFile(file);
      });
    }
    })();
  })




  connection.query('SELECT tv_id FROM crazzle.tv_shows', function (err, rows, fields) {
    if (err) throw err;

    const getRow = num => {
      return rows[num];
    }
    function getDetails(num,callback){
      connection.query(`select wp_id,wp_name,role_name,contract_length from crazzle.working_persons inner join (select project_description,project_person,role_name,contract_length from crazzle.projects inner join ( select role_project,role_name,contract_length from crazzle.roles inner join crazzle.contracts on roles.role_id=contracts.contract_role) as role on project_id=role_project where project_description='actor' and project_product='${num}' and project_type='tv_show') as project on wp_id=project_person;`,function (new_err, new_rows, new_fields) {
        if (err) {throw err}
        else{
          app.get(`/api/products/tv_shows/${num}/cast/actors`,cors(), function(req,res){
              res.send(new_rows);
          });
        }
      })
      connection.query(`select wp_name,project_description from crazzle.working_persons inner join (select project_description,project_person from crazzle.projects where project_product='${num}' and project_type='tv_show' and project_description!='actor') as projects on wp_id=project_person;`,function (new_err, new_rows, new_fields) {
        if (err) {throw err}
        else{
          app.get(`/api/products/tv_shows/${num}/cast/others`,cors(), function(req,res){
              res.send(new_rows);
          });
        }
      })
      connection.query(`select review_title,review_author,review_rating,review_description from crazzle.tv_shows inner join (select * from crazzle.reviews where review_media='tv_shows' and review_related_product=${num}) as reviews on tv_id=review_related_product;`,function (new_err, new_rows, new_fields) {
        if (err) {throw err}
        else{
          app.get(`/api/products/tv_shows/${num}/reviews`,cors(), function(req,res){
              res.send(new_rows);
          });
        }
      })
      connection.query(`select * from crazzle.discussions where dis_related_product_type='tv_shows' and dis_related_product=${num};`,function (new_err, new_rows, new_fields) {
        if (err) {throw err}
        else{
          app.get(`/api/products/tv_shows/${num}/discussions`,cors(), function(req,res){
              res.send(new_rows);
          });
        }
      })
    }


    (async function(){ 
    for (i in rows) {
      const row = await getRow(i);
      getDetails(row.tv_id,function(result){
        console.log(result);
     });
     
    }
    })();
  })

  connection.query('SELECT film_id FROM crazzle.films', function (err, rows, fields) {
    if (err) throw err;

    const getRow = num => {
      return rows[num];
    }
    function getDetails(num,callback){
      connection.query(`select wp_id,wp_name,role_name from crazzle.working_persons inner join (select project_description,project_person,role_name from crazzle.projects inner join ( select role_project,role_name from crazzle.roles ) as role on project_id=role_project where project_description='actor' and project_product='${num}' and project_type='film') as project on wp_id=project_person;`,function (new_err, new_rows, new_fields) {
        if (err) {throw err}
        else{
          app.get(`/api/products/films/${num}/cast/actors`,cors(), function(req,res){
              res.send(new_rows);
          });
        }
      })
      connection.query(`select wp_name,project_description from crazzle.working_persons inner join (select project_description,project_person from crazzle.projects where project_product='${num}' and project_type='film' and project_description!='actor') as projects on wp_id=project_person;`,function (new_err, new_rows, new_fields) {
        if (err) {throw err}
        else{
          app.get(`/api/products/films/${num}/cast/others`,cors(), function(req,res){
              res.send(new_rows);
          });
        }
      })
      connection.query(`select review_title,review_author,review_rating,review_description from crazzle.films inner join (select * from crazzle.reviews where review_media='film' and review_related_product=${num}) as reviews on film_id=review_related_product;`,function (new_err, new_rows, new_fields) {
        if (err) {throw err}
        else{
          app.get(`/api/products/films/${num}/reviews`,cors(), function(req,res){
              res.send(new_rows);
          });
        }
      })
      connection.query(`select * from crazzle.discussions where dis_related_product_type='film' and dis_related_product=${num};`,function (new_err, new_rows, new_fields) {
        if (err) {throw err}
        else{
          app.get(`/api/products/films/${num}/discussions`,cors(), function(req,res){
              res.send(new_rows);
          });
        }
      })
    }


    (async function(){ 
    for (i in rows) {
      const row = await getRow(i);
      getDetails(row.film_id,function(result){
        console.log(result);
     });
     
    }
    })();
  })

  connection.query('SELECT book_id FROM crazzle.books', function (err, rows, fields) {
    if (err) throw err;

    const getRow = num => {
      return rows[num];
    }
    function getDetails(num,callback){
      

      connection.query(`select review_title,review_author,review_rating,review_description from crazzle.books inner join (select * from crazzle.reviews where review_media='book' and review_related_product=${num}) as reviews on book_id=review_related_product;`,function (new_err, new_rows, new_fields) {
        if (err) {throw err}
        else{
          app.get(`/api/products/books/${num}/reviews`,cors(), function(req,res){
              res.send(new_rows);
          });
        }
      })
      connection.query(`select * from crazzle.discussions where dis_related_product_type='book' and dis_related_product=${num};`,function (new_err, new_rows, new_fields) {
        if (err) {throw err}
        else{
          app.get(`/api/products/books/${num}/discussions`,cors(), function(req,res){
              res.send(new_rows);
          });
        }
      })
    }
    (async function(){ 
    for (i in rows) {
      const row = await getRow(i);
      getDetails(row.book_id,function(result){
        console.log(result);
     });
     
    }
    })();
  })
app.listen(5000,function(){
    console.log('Server started on port 5000...')
});


//POST
app.post('/api/new_user', (req, res) => {
  console.log('Got body:', req.body);

  connection.query(`select * from crazzle.users where user_name='${req.body.username}'`,function (err, rows, fields) {
    if (err) {throw err}
    const getLength = obj => {
      return obj.length;
    }
    (async function(){
    
      const length = await(getLength(rows));
      if (length!==0){
        res.send({msg:"Username taken"})
        console.log(rows.length)
    }
    else{
      connection.query(`insert into crazzle.users (user_name,user_password,user_description,user_birthdate,user_profile_pic) values ('${req.body.username}','${req.body.password}','${req.body.description}','${req.body.birth_date}','placeholder.png')`,function (newer_err, new_rows, new_fields) {
        if (newer_err) {throw newer_err}
        console.log("1 record inserted");
        res.send({msg:"Registration is successful",
        user:new_rows[0]
      })
      })
      //app.post('/api/saveImage', upload.single('image'),(new_req, new_res,new_err) => {
      //  console.log('Got body:', new_req.file.filename);
      //  
      //  res.send({msg:"Registration is successful"})
    //
      //});
    }
      })();
    
  })
});

app.post('/api/saveImage', upload.single('image'),(req, res,err) => {
        console.log('Got body:', req.file.filename);
        
        res.send({msg:"Registration is successful"})
  
 });


app.post('/api/login', (req, res) => {
  console.log('Got body:', req.body);

  connection.query(`select * from crazzle.users where user_name='${req.body.username}'`,function (err, rows, fields) {
    if (err) {throw err}
    const isCorrectPassword = () => {
      return rows[0].user_password===req.body.password
    }
    const getLength = obj => {
      return obj.length;
    }

    (async function(){
    
      const length = await(getLength(rows));
      if (length===0){
        res.send({msg:"User doesn't exist "})
        console.log(rows.length)
    }
    else{
      (async function(){
    
        var passwd = await(isCorrectPassword());
        if (passwd){
          res.send({msg:"Login is successful",
        user:rows[0]
      })
          console.log(rows.length)
      }
      else{
          res.send({msg:"Wrong Password"});
      }
        })();
    }
      })();
  })
});

app.post('/api/addReview', (req, res) => {
  console.log('Got body:', req.body);

  connection.query(`select * from crazzle.reviews where review_author='${req.body.author}' && review_related_product='${req.body.product}' && review_media='${req.body.media}'`,function (err, rows, fields) {
    if (err) {throw err}
    const getObj = obj => {
      return obj;
    }
    (async function(){
      if (rows.length!==0){
        connection.query(`update crazzle.reviews set review_title='${req.body.title}',review_description='${req.body.description}',review_rating='${req.body.rating}' where review_id='${rows[0].review_id}'`,function (newer_err, new_rows, new_fields) {
          if (newer_err) {throw newer_err}
          console.log("1 record inserted");
          res.send({msg:"Review is added",
          user:new_rows[0]
        })
        })
    }
    else{
      connection.query(`insert into crazzle.reviews (review_author,review_rating,review_description,review_title,review_related_product,review_media) values ('${req.body.author}','${req.body.rating}','${req.body.description}','${req.body.title}','${req.body.product}','${req.body.media}')`,function (newer_err, new_rows, new_fields) {
        if (newer_err) {throw newer_err}
        console.log("1 record inserted");
        res.send({msg:"Review is added",
        user:new_rows[0]
      })
      })
    }
      })();
    
  })
});

app.post('/api/addDiscussion', (req, res) => {
  console.log('Got body:', req.body);

  connection.query(`insert into crazzle.discussions (dis_author,dis_related_product,dis_related_product_type,dis_description,dis_publication_date) values ("${req.body.author}","${req.body.product}","${req.body.media}","${req.body.description}","${req.body.date}") `,function (err, rows, fields) {
    if (err) {throw err}
    res.send({msg:"Discussion is added"});
  })
});

app.post('/api/addDiscussionWithImage', (req, res) => {
  console.log('Got body:', req.body);

  connection.query(`insert into crazzle.discussions (dis_author,dis_related_product,dis_related_product_type,dis_description,dis_publication_date,dis_img) values ("${req.body.author}","${req.body.product}","${req.body.media}","${req.body.description}","${req.body.date}","${req.body.pic}") `,function (err, rows, fields) {
    if (err) {throw err}
    res.send({msg:"Discussion is added"});
  })
});

app.post('/api/logComment', (req, res) => {
  console.log('Got body:', req.body);
  connection.query(`insert into crazzle.comments (comment_author,comment_description,comment_discussion) values ('${req.body.author}','${req.body.description}','${req.body.discussion}');`,function (err, rows, fields) {
    if (err) {throw err}
    console.log("1 comment inserted");
  })

  connection.query(`update crazzle.discussions set dis_comments=dis_comments+1 where dis_id=${req.body.discussion}`,function (err, rows, fields) {
    if (err) {throw err}
    console.log("1 comment inserted");
    res.send({msg:"Comment is logged"
  })
  })
});

app.post('/api/logVote', (req, res) => {
  console.log('Got body:', req.body);
  if(req.body.to==='discussion'){

  }
  else if(req.body.to==='comment'){

  }
  else{
    
  }
  //connection.query(`insert into crazzle.comments (comment_author,comment_description,comment_discussion) values ('${req.body.author}','${req.body.description}','${req.body.discussion}');`,function (err, rows, fields) {
  //  if (err) {throw err}
  //  console.log("1 comment inserted");
  //  res.send({msg:"Vote is logged"
  //})
  //})
//
  //connection.query(`update crazzle.discussions set dis_comments=dis_comments+1 where dis_id=${req.body.discussion}`,function (err, rows, fields) {
  //  if (err) {throw err}
  //  console.log("1 comment inserted");
  //  res.send({msg:"Comment is logged"
  //})
  //})
});

