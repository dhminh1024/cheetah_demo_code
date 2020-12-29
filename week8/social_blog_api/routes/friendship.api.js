const express = require("express");
const router = express.Router();

/**
 * @route POST api/friends/add/:id
 * @description Send a friend request to an user
 * @access Login required
 */

/**
 * @route DELETE api/friends/add/:id
 * @description Cancel a friend request to an user
 * @access Login required
 */

/**
 * @route GET api/friends/add
 * @description Get the list of friend requests that are sent by the user
 * @access Login required
 */

/**
 * @route GET api/friends/manage
 * @description Get the list of received friend requests
 * @access Login required
 */

/**
 * @route GET api/friends
 * @description Get the list of friends
 * @access Login required
 */

/**
 * @route POST api/friends/manage/:id
 * @description Accept a friend request from an user
 * @access Login required
 */

/**
 * @route DELETE api/friends/manage/:id
 * @description Decline a friend request from an user
 * @access Login required
 */

/**
 * @route DELETE api/friends/:id
 * @description Remove a friend
 * @access Login required
 */

module.exports = router;
