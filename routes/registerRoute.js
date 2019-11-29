// router.post("/register", (req, res) => {

//     const { errors, isValid } = validateRegisterInput(req.body);

//     if (!isValid) {
//         return res.status(400).json(errors);
//     }
//     User.findOne({ email: req.body.email }).then(user => {
//         if (user) {
//             return res.status(400).json({ email: "Email already exists" });
//         } else {
//             const User = new User({
//                 email: req.body.email,
//                 password: req.body.password
//             });

//             bcrypt.genSalt(10, (err, salt) => {
//                 bcrypt.hash(User.password, salt, (err, hash) => {
//                     if (err) throw err;
//                     User.password = hash;
//                     User
//                         .save()
//                         .then(user => res.json(user))
//                         .catch(err => console.log(err));
//                 });
//             });
//         }
//     });
// });