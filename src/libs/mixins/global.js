const mixins = {
  beforeMount() {
    const styles = document.querySelectorAll('style[shinmark=true]');
    styles.forEach((item, index) => {
      item.innerHTML = item.innerHTML.replace(/\$primary-color/ig, 'RGBA(31,11,179,1)');
      item.setAttribute('shinmark', 'false');
    })
  }
}

export default mixins