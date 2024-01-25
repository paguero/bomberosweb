export const slugify = (text, ampersand = 'and') => {
    const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿỳýœæŕśńṕẃǵǹḿǘẍźḧ'
    const b = 'aaaaeeeeiiiioooouuuuncsyyyoarsnpwgnmuxzh'
    const p = new RegExp(a.split('').join('|'), 'g')
    if(!text)
        text='';
    return text.toString().toLowerCase()
      .replace(/[\s_]+/g, '-')
      .replace(p, c =>
        b.charAt(a.indexOf(c)))
      .replace(/&/g, `-${ampersand}-`)
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+|-+$/g, '')
};