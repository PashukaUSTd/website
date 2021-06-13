export default function gotoPage(pageName, pageParams) {
  this.emitter.emit('gotoPage', { name: pageName, id: pageParams });
}
