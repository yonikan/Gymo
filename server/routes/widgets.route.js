const express = require('express');
const router = express.Router();
const Widget = require('../models/widget');

router.get('/',  (req, res, next) => {
    Widget.find()
        .exec((err, widgets) => {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }

            res.status(200).json({
                widget: 'Success',
                obj: widgets
            });
        });
});

router.post('/', (req, res, next) => {
    let widget = new Widget({
        content: req.body.content
    });

    widget.save((err, result) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

        res.status(201).json({
            widget: 'Saved widget',
            obj: result
        });
    });
});

router.patch('/:id', (req, res, next) => {
    Widget.findById(req.params.id, (err, widget) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

        if (!widget) {
            return res.status(500).json({
                title: 'No Widget Found!',
                error: {widget: 'Widget not found'}
            });
        }
        widget.content = req.body.content;
        widget.save((err, result) => {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                widget: 'Updated widget',
                obj: result
            });
        });
    });
});

router.delete('/:id', (req, res, next) => {
    Widget.findById(req.params.id, (err, widget) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

        if (!widget) {
            return res.status(500).json({
                title: 'No Widget Found!',
                error: {widget: 'Widget not found'}
            });
        }
        
        widget.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                widget: 'Deleted widget',
                obj: result
            });
        });
    });
});

module.exports = router;