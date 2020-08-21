var express = require("express");
var passport = require("passport");
var Strategy = require("passport-twitter").Strategy;
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./resources/User");

// Configure the Twitter strategy for use by Passport.
//
// OAuth 1.0-based strategies require a `verify` function which receives the
// credentials (`token` and `tokenSecret`) for accessing the Twitter API on the
// user's behalf, along with the user's profile.  The function must invoke `cb`
// with a user object, which will be set at `req.user` in route handlers after
// authentication.
passport.use(
  new Strategy(
    {
      consumerKey: "bQl7EvgtZrPGI5eKzP4dlkn9G",
      consumerSecret: "O3Oikfe7h8YhyuHXVj1pq8oBgYLnhPTigLbEsa24Gav0diIMf6",
      callbackURL: "/oauth/callback",
      includeEmail: true
    },
    function(token, tokenSecret, profile, cb) {
      User.findOrCreate(
        {
          twitterId: profile.id,
          name: profile._json.name,
          screen_name: profile._json.screen_name,
          url: profile._json.url,
          description: profile._json.description,
          followers_count: profile._json.followers_count,
          profile_image_url_https: profile._json.profile_image_url_https
        },
        function(err, user) {
          return cb(err, user);
        }
      );
    }
  )
);

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Twitter profile is serialized
// and deserialized.
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Create a new Express application.
var app = express();

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require("morgan")("combined"));
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:1234", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://wes:SedrfT6^@ds029496.mlab.com:29496/tweeter", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("mongoose connected");
});

// Define routes.
app.get("/", (req, res) => {
  res.send(req.user);
});

app.get("/auth/twitter", passport.authenticate("twitter"));

app.get(
  "/oauth/callback",
  passport.authenticate("twitter", {
    failureRedirect: "/login",
    successRedirect: "http://localhost:1234/dashboard"
  })
);

app.listen(process.env["PORT"] || 5000, () =>
  console.log("Server on port 5000")
);
