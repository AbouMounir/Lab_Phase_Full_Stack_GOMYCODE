import express from 'express';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js';
import Question from '../models/Question.js';


const router = express.Router();

router.post(('/users/signup'), (req,res) => {
    
    if (req.body.password == req.body.password_c) {
        bcrypt.hash(req.body.password,10)
            .then(async hash => {
                const user = await new User({ 
                    Nom : req.body.name,
                    Email : req.body.email ,
                    Password : hash ,
                    PasswordV : hash,
                })
                await user.save()
                    .then(() => res.status(201).json({ message: 'User enregistré !'}))
                    .catch(error => res.status(400).json({ error }));
                console.log(user);
            })
            .catch(error => res.status(500).json({ error }))
    } else {
        res.status(500).json({message : 'mot de passe incorrect'})
    }
  
});

router.get('/users/signup', (req,res) => {
    User.findOne({Email : req.body.email}).then(item => res.send(item))
})

router.post('/users/loginin', (req,res) => {
    User.findOne({Email: req.body.email})
        .then(user => {
            if (user == null) {
                res.status(500).json({message : 'mot de passe et/ou email incorrect'})
            } else {
                    hash => bcrypt.compare(req.body.password, user.Password)
                        .then(valid => {
                            console.log(valid);
                            if (valid == false) {
                                
                                res.status(400).json({message : 'mot de passe et/ou email incorrect'})
                            } else {
                                console.log(hash);
                                console.log(user.Password);
                                res.status(201).json({
                                    userID : user._id,
                                    token : jwt.sign(
                                         {userID : user._id},
                                        'RANDOM_TOKEN_SECRET',
                                        {expiresIn : '24h'}
                                    ) 
                                })
                            }
                            
                        })
                        .catch(error => res.json({error}))
            }
        })
        .catch(error => res.json({error}))
        
})

router.get('/users/loginin', (req,res) => {
    User.findOne({Email : req.body.email}).then(item => {
        res.send(item)})
})

router.post(('/questions'), async (req,res) => {

    const question = await new Question({
        Title : req.body.title,
        Contain : req.body.contain,
        Technology : req.body.technology, 
        Date : req.body.date,
    })

    question.save()
    .then(() => res.status(201).json({message : 'Objet enregistré'}))
    .catch(error => res.status(400).json({error}))
    console.log(question);
});

router.get(('/questions'), (req,res) => {
    Question.find({}).then(item => res.send(item))
})

export default router; 