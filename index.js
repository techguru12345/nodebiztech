const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const nodemailer = require("nodemailer")
const { check, validationResult } = require('express-validator');

const mysql = require("mysql2");

// const db = mysql.createPool({
//     host: "digi-1.cwwgtxnpyk3l.us-east-1.rds.amazonaws.com",
//     user: "admin",
//     password: "Techgurudb1234",
//     database: "sqldigi123",
// });

//---------------Localhost-database---

// const db2 = mysql.createPool({
//     host: "localhost",
//     user: "pzqjchtu_remote",
//     password: "wzchVuyva?PY",
//     database: "pzqjchtu_degree",
//     port:"3306"
// })

const db1 = mysql.createPool({
    host: "sql12.freemysqlhosting.net",
    user: "sql12551771",
    password: "Jr4NSyRQdp",
    database: "sql12551771"

});

//-----------------end----------------

const PORT = process.env.PORT || 5005

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

//-----------nodemailer-E-mail---------------
app.get('/test', (req, res) => {
    res.send('Hello world');
});
// ------------------------------------------  

app.post("/send_mail", (req, res) => {
    let { activities, attendies, time, fulladd, name, email } = req.body;

    let transport = nodemailer.createTransport({
        host: "smtp.ionos.com",
        port: 587,
        secure: false,
        auth: {
            user: "getintouch@digitizeadvisory.com",
            pass: "Techguru@123"
        }
    })
    transport.sendMail({
        from: "getintouch@digitizeadvisory.com",
        to: [email, "getintouch@digitizeadvisory.com"],
        subject: "Enquiry ID",
        html: `<!-- Complete Email template -->
   
        <body style="background-color:grey">
            <table align="center" border="0" cellpadding="0" cellspacing="0"
                   width="550" bgcolor="white" style="border:2px solid black">
                <tbody>
                    <tr>
                        <td align="center">
                            <table align="center" border="0" cellpadding="0"
                                   cellspacing="0" class="col-550" width="550">
                                <tbody>
                                    <tr>
                                        <td align="center" style="background-color: #4cb96b;
                                                   height: 50px;">
           
                                            <a href="#" style="text-decoration: none;">
                                                <p style="color:white;
                                                          font-weight:bold;">
                                                          365 degree solution
                                                </p>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr style="height: 300px;">
                        <td align="center" style="border: none;
                                   border-bottom: 2px solid #4cb96b; 
                                   padding-right: 20px;padding-left:20px">
           
                            <p style="font-weight: bolder;font-size: 42px;
                                      letter-spacing: 0.025em;
                                      color:black;">
                                      365 degree solution event organiser and productions casting agency
                                <br> Check out our latest Blogs
                            </p>
                        </td>
                    </tr>
           
                    <tr style="display: inline-block;">
                        <td style="height: 150px;
                                   padding: 20px;
                                   border: none; 
                                   border-bottom: 2px solid #361B0E;
                                   background-color: white;">
                             
                            <h2 style="text-align: left;
                                       align-items: center;">
                                       <h2>Here is your Event-Desc!</h2>
                                       </h2>
                                           <p>Activities: ${activities}</p>
                                           <p>Attendies: ${attendies}</p>
                                           <p>Time: ${time}</p>
                                           <p>Full-Address: ${fulladd}</p>
                            <p class="data"
                               style="text-align: justify-all;
                                      align-items: center; 
                                      font-size: 15px;
                                      padding-bottom: 12px;">
                             Hyy ${name} your gmail is ${email} Design Patterns….??? I think you have heard this name 
                              before any programm… Yes, you might have heard 
                              this name before in Events management if you are…
                            </p>
                            <p>
                                <a href="https://www.mmaplay365.com/wp-content/uploads/2019/06/product_img_next-event-v2.jpg"
                                   style="text-decoration: none; 
                                          color:black; 
                                          border: 2px solid #4cb96b; 
                                          padding: 10px 30px;
                                          font-weight: bold;"> 
                                   Read More 
                              </a>
                            </p>
                        </td>
                    </tr>
                    <tr style="border: none; 
                    background-color: #4cb96b; 
                    height: 40px; 
                    color:white; 
                    padding-bottom: 20px; 
                    text-align: center;">
                          
        <td height="40px" align="center">
            <p style="color:white; 
            line-height: 1.5em;">
           365 Degree Solution
            </p>
            <a href="#" 
            style="border:none;
                   text-decoration: none; 
                   padding: 5px;"> 
                     
            <img height="30" 
            src=
        "https://www.youtube.com/" 
            width="30" /> 
            </a> 
              
            <a href="#"
            style="border:none;
            text-decoration: none; 
            padding: 5px;"> 
              
            <img height="30" 
            src=
        "https://cdn5.vectorstock.com/i/1000x1000/13/74/upcoming-events-neon-text-neon-sign-vector-22241374.jpg" 
        width="30" /> 
            </a>
              
            <a href="#" 
            style="border:none;
            text-decoration: none;
            padding: 5px;"> 
              
            <img height="20"
            src=
        "https://extraaedgeresources.blob.core.windows.net/demo/salesdemo/EmailAttachments/facebook-letter-logo_20190610100050.png" 
                width="24" 
                style="position: relative; 
                       padding-bottom: 5px;" />
            </a>
        </td>
        </tr>
        <tr>
        <td style="font-family:'Open Sans', Arial, sans-serif;
                   font-size:11px; line-height:18px; 
                   color:#999999;" 
            valign="top"
            align="center">
        <a href="#"
           target="_blank" 
           style="color:#999999; 
                  text-decoration:underline;">PRIVACY STATEMENT</a> 
                  | <a href="#" target="_blank" 
                  style="color:#999999; text-decoration:underline;">TERMS OF SERVICE</a> 
                  | <a href="#"
                  target="_blank" 
                  style="color:#999999; text-decoration:underline;">RETURNS</a><br>
                          © 2012 365Degsol. All Rights Reserved.<br>
                          If you do not wish to receive any further 
                          emails from us, please
                          <a href="#"
                          target="_blank"
                          style="text-decoration:none; 
                                 color:#999999;">unsubscribe</a>
                    </td>
                      </tr>
                    </tbody></table></td>
                </tr>
                <tr>
                  <td class="em_hide"
                  style="line-height:1px;
                         min-width:700px;
                         background-color:#ffffff;">
                      <img alt="" 
                      src="images/spacer.gif" 
                      style="max-height:1px; 
                      min-height:1px; 
                      display:block; 
                      width:700px; 
                      min-width:700px;" 
                      width="700"
                      border="0" 
                      height="1">
                      </td>
                </tr>
                </tbody>
            </table>
        </body>`
    }).then(resp => {
        res.json({ resp })
    })
        .catch(err => {
            console.log(err)
        })
})

//-----------NodeMailer-End------------------

// --------------for 365 Degree--------------

app.get("/api/properties", (req, res) => {
    const sqlSelect =
        "SELECT * FROM properties";
    db1.query(sqlSelect, (err, result) => {
        console.log("work")
        res.send(result)
    })
})

app.get("/api/propertylocation", (req, res) => {
    const sqlSelect =
        "SELECT * FROM propertylocation";
    db1.query(sqlSelect, (err, result) => {
        console.log("work")
        res.send(result)
    })
})

app.get("/api/property/:add&:place", (req, res) => {
    const { add } = req.params;
    const { place } = req.params;
    const sqlSelect =
        // "SELECT properties.prsop_sc, properties.prop_type, propertydetail.prop_name, propertydetail.prop_img, propertydetail.prop_address FROM propertydetail INNER JOIN properties ON propertydetail.prop_sc=?";
        "SELECT * from propertydetail, properties , propertylocation where  propertydetail.prop_add = ? AND propertydetail.prop_add = propertylocation.prop_add AND propertydetail.prop_sc = ? AND propertydetail.prop_sc = properties.prop_sc";

    db1.query(sqlSelect, [add, place], (err, result) => {
        console.log(result)
        console.log("work")
        return (res.send(result));
    })
})


// post method detail------------------

app.get("/api/getdetail", (req, res) => {
    const sqlSelect =
        "SELECT * FROM 365detail";
    db1.query(sqlSelect, (err, result) => {
        console.log("work")
        res.send(result)
    })
})
app.post("/api/365detail", (req, res) => {
    const activities = req.body.activities;
    const attendies = req.body.attendies;
    const time = req.body.time;
    const fulladd = req.body.fulladd;

    const sqlInsert =
        "INSERT INTO 365detail (activities, attendies, time, fulladd) VALUES (?,?,?,?)";
    db1.query(sqlInsert, [activities, attendies, time, fulladd], (err, result) => {
        console.log("its work")
        console.log(result);
        res.send({ message: "Inquiry Submited Succeccfuly" });
    });
})

// ----------------------------------------
app.get("/api/getd1", (req, res) => {
    const sqlSelect =
        "SELECT * FROM contactus_d1";
    db1.query(sqlSelect, (err, result) => {
        console.log("work")
        res.send(result)
    })
})
app.post("/api/insertd1", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const subject = req.body.subject;
    const textarea = req.body.textarea;

    const sqlInsert =
        "INSERT INTO contactus_d1 (name, email, phone, subject, textarea) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [name, email, phone, subject, textarea], (err, result) => {
        console.log("its work")
        console.log(result);
        res.send({ message: "Succeccfuly Submited" });
    });
})


// -------------------end--------------------


//----------------Orian-website-----

app.get('/api/getData', (req, res) => {
    const sqlSelect =
        "SELECT * FROM danish";
    db1.query(sqlSelect, (err, result) => {
        res.send(result);
    });
})

app.get('/api/getData1', (req, res) => {
    const sqlSelect =
        "SELECT * FROM Gp_100";
    db1.query(sqlSelect, (err, result) => {
        res.send(result);
    });
})

app.get('/api/getData2', (req, res) => {
    const sqlSelect =
        "SELECT * FROM Gp_30";
    db1.query(sqlSelect, (err, result) => {
        res.send(result);
    });
})
//----------------Orian-website-----

// ------contactus_page-------
app.get("/api/get", (req, res) => {
    const sqlSelect =
        "SELECT * FROM contactus";
    db.query(sqlSelect, (err, result) => {
        console.log("work")
        res.send(result)
    })
})
app.post("/api/insert", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const subject = req.body.subject;
    const textarea = req.body.textarea;

    const sqlInsert =
        "INSERT INTO contactus (name, email, phone, subject, textarea) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [name, email, phone, subject, textarea], (err, result) => {
        console.log("its work")
        console.log(result);
        res.send({ message: "Succeccfuly Submited" });
    });
})



// -----------contactus_page_end------------

app.get("/api/get1", (req, res) => {
    const sqlSelect =
        "SELECT * FROM quotation";
    db.query(sqlSelect, (err, result) => {
        console.log("work" + result);
        res.send(result)
        console.log(err + " ", + req);

    })
})

app.post("/api/insert1", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const comment = req.body.comment;
    const middle_developer = req.body.count;
    const Senior_developer = req.body.count1;
    const Team_Lead = req.body.count2;
    const type_of_software1 = req.body.checkbox1;
    const type_of_software2 = req.body.checkbox2;
    const type_of_software3 = req.body.checkbox3;
    const type_of_software4 = req.body.checkbox4;
    const development_stage = req.body.stage;
    const professional_specialists1 = req.body.check1;
    const professional_specialists2 = req.body.check2;
    const professional_specialists3 = req.body.check3;
    const professional_specialists4 = req.body.check4;
    const professional_specialists5 = req.body.check5;
    const business_industry = req.body.Business;
    const expected_time_duration = req.body.slider;

    console.log("befor e-mail " + email + " " + req);
    db.query('select * from quotation where email="' + email + '" ', (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            console.log("error" + email + " " + err);
            return (res.send({ message: "E-mail Already Exist" }));
        }
        else {
            const sqlInsert =
                "INSERT INTO quotation (name, email, phone, comment, `middle_developer`, `Senior_developer`, `Team_Lead`, `type_of_software1`, `type_of_software2`, `type_of_software3`, `type_of_software4`, `development_stage`, `professional_specialists1`, `professional_specialists2`, `professional_specialists3`, `professional_specialists4`, `professional_specialists5`, `business_industry`, `expected_time_duration`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            db.query(sqlInsert, [name, email, phone, comment, middle_developer, Senior_developer, Team_Lead, type_of_software1, type_of_software2, type_of_software3, type_of_software4, development_stage, professional_specialists1, professional_specialists2, professional_specialists3, professional_specialists4, professional_specialists5, business_industry, expected_time_duration], (err, result) => {
                console.log("response" + email + " " + sqlInsert);
                return (res.send({ message: "Inquiry Submited Succeccfuly" }));

            });
        }
    })
});

//-----------tachstach------------
// app.get("/api/get1", (req, res) => {
//     const sqlSelect =
//         "SELECT * FROM quotation";
//     db.query(sqlSelect, (err, result) => {
//         console.log("work")
//         res.send(result)
//         console.log(err)
//     })
// })

// app.post("/api/insert1", (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const phone = req.body.phone;
//     const comment = req.body.comment;
//     const NDA = req.body.check;
//     const middle_developer = req.body.count;
//     const Senior_developer = req.body.count1;
//     const Team_Lead = req.body.count2;
//     const type_of_software1 = req.body.checkbox1;
//     const type_of_software2 = req.body.checkbox2;
//     const type_of_software3 = req.body.checkbox3;
//     const type_of_software4 = req.body.checkbox4;
//     const development_stage = req.body.stage;
//     const professional_specialists1 = req.body.check1;
//     const professional_specialists2 = req.body.check2;
//     const professional_specialists3 = req.body.check3;
//     const professional_specialists4 = req.body.check4;
//     const professional_specialists5 = req.body.check5;
//     const business_industry = req.body.Business;
//     const expected_time_duration = req.body.slider;

//     const sqlInsert =
//         "INSERT INTO quotation (name, email, phone, comment, `NDA`, `middle_developer`, `Senior_developer`, `Team_Lead`, `type_of_software1`, `type_of_software2`, `type_of_software3`, `type_of_software4`, `development_stage`, `professional_specialists1`, `professional_specialists2`, `professional_specialists3`, `professional_specialists4`, `professional_specialists5`, `business_industry`, `expected_time_duration`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
//     db.query(sqlInsert, [name, email, phone, comment, NDA, middle_developer, Senior_developer, Team_Lead, type_of_software1, type_of_software2, type_of_software3, type_of_software4, development_stage, professional_specialists1, professional_specialists2, professional_specialists3, professional_specialists4, professional_specialists5, business_industry, expected_time_duration], (err, result) => {
//         res.send(result)
//         console.log("its work")
//         console.log(result);
//         console.log(err)


//     });
// })



//-------------tachstach---------------

// ------------------subscribe-----------------

// app.get('/api/get2',(req, res) =>{
//     const sqlSelect = 
//    "SELECT * FROM subscribe";
//     db.query(sqlSelect, (err, result) => {
//         res.send(result);
// });
// })

// app.post("/api/insert2", (req, res) => {

//     const name = req.body.name
//     const email = req.body.email 

//     const sqlInsert = 
//     "INSERT INTO subscribe (name, email) VALUES (?, ?)";
//     db.query(sqlInsert, [name ,email], (err, result) => {
//         res.send(result);

//     });
//     })



//-------------------testing------------------

app.get('/api/get2', (req, res) => {
    const sqlSelect =
        "SELECT * FROM subscribe";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
})

app.post("/api/insert2", (req, res) => {

    const name = req.body.name
    const email = req.body.email

    db.query('select * from subscribe where email="' + email + '" ', (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send({ message: "Already subscribed with these E-mail" });
        }
        else {
            const sqlInsert =
                "INSERT INTO subscribe (name, email) VALUES (?, ?)";
            db.query(sqlInsert, [name, email], (err, result) => {
                return (res.send({ message: "Succeccfuly Subscribed" }));
            });
            return 'https://diztechnode.herokuapp.com/api/insert2';
        }
    });
});

//------------------testing---End------------------

app.get('/api/getdata', (req, res) => {
    const sqlSelect =
        "SELECT * FROM jsondata";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
})

app.post("/api/insertdata", (req, res) => {
    const id = req.body.id;
    const image = req.body.image;
    const price = req.body.price;
    const rating = req.body.rating;

    const sqlInsert =
        "INSERT INTO jsondata (id , image, price, rating) VALUES (?, ?,?,?)";
    db.query(sqlInsert, [id, image, price, rating], (err, result) => {
        console.log("its work")
        console.log(result);
        res.send({ message: "Succeccfuly Submited" });
    });
})

//--------------------testNode-------------------------
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})