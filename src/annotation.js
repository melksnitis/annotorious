goog.provide('annotorious.Annotation');

goog.require('annotorious.shape');

/**
 * A 'domain class' implementation of the external annotation interface.
 * @param {string} src the source URL of the annotated object
 * @param {string} text the annotation text
 * @param {string} tag the annotation tag
 * @param {annotorious.shape.Shape} shape the annotated fragment shape
 * @constructor
 */

annotorious.Annotation = function(src, text, shape, tag, id) {
  console.log(tag);
  this.tag = tag || '';
  this.id = id || '';
  this.src = src;
  this.text = text;
  this.shapes = [ shape ];
  this['context'] = document.URL; // Prevents dead code removal
}
