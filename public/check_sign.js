var sign = require('./sign.js');
console.log(sign('jsapi_ticket', 'http://example.com'));
/*
 *something like this
 *{
 *  jsapi_ticket: 'kgt8ON7yVITDhtdwci0qecXzo5rdxPz06o9LIJ8zeY4bgMTny5eluIjMnO5hS5IEK0N1iGVpvFw8qvl4M86lPQ',
 *  nonceStr: '82zklqj7ycoywrk',
 *  timestamp: '1415171822',
 *  url: 'http://example.com',
 *  signature: '1316ed92e0827786cfda3ae355f33760c4f70c1f'
 *}
 */

// const signName = sign("kgt8ON7yVITDhtdwci0qecXzo5rdxPz06o9LIJ8zeY4bgMTny5eluIjMnO5hS5IEK0N1iGVpvFw8qvl4M86lPQ")