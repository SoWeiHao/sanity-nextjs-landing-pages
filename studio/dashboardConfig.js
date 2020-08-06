export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2b8718a66f6ef89f92d0b5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-iknte8ck',
                  apiId: '7c51acd9-ed98-4be6-9dbc-78122ebf79b0'
                },
                {
                  buildHookId: '5f2b87183688a554342c2de0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1ae8tdfz',
                  apiId: '52494acd-b0fe-4ebd-8fae-965f6e0efda0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SoWeiHao/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1ae8tdfz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
