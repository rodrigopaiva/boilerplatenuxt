
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Asfora Filmes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Asfora Filmes, produtora, produção, audiovisual, programa, TV, documentário, vídeo, filme, publicidade, institucional, branded content, corporativa, animação, websérie, web'},
      { hid: 'description', name: 'description', content: 'A Asfora Filmes é uma produtora de conteúdos audiovisuais, localizada no Recife, que tem como missão oferecer soluções criativas para sua empresa ou produto.'},
      {'http-equiv': 'cache-control', content:'no-cache'},
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-touch-fullscreen', content: 'yes' },
      { name: 'format-detection', content: 'telephone=yes' },
      { name: 'DC.title', content: 'Asfora Filmes' },
      { name: 'DC.publisher', content: 'Rubro Studio' },
      { name: 'DC.creator.address', content: 'contato@rubrostudio.com.br' },
      { name: 'robots', content: 'Index' },
      { name: 'author', content: 'Rubro Studio' },
      { name: 'rating', content: 'general' },
      { name: 'distribution', content: 'global' },
      { name: 'copyright', content: 'Asfora Filmes - Todos os direitos reservados' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=PT+Sans:400,700' },
      { rel: 'author', type: 'text/plain', href: '/humans.txt' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    // publicPath: '/assets/',
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
