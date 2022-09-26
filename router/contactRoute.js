const express = require("express")
const router = express.Router()
const ContactModel = require("../models/contactModel")

router.get("/", async (req, res) => {
    try {
        const contact = await ContactModel.find()

        res.status(200).json(contact)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post("/create", async (req, res) => {
    try {
        const { firstName, lastName, phoneNumber, address } = req.body

        const contact = new ContactModel(req.body)

        const response = await contact.save()

        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put("/edit/:id", async (req, res) => {
    try {
        const contact = await ContactModel.findById(req.params.id).exec()

        res.status(200).json(contact)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.patch("/update/:id", async (req, res) => {
    try {
        const contact = await ContactModel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )

        res.status(200).json(contact)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete("/delete/:id", async (req, res) => {
    try {
        const contact = await ContactModel.findByIdAndDelete(req.params.id)

        res.status(200).json("Product has been deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router
