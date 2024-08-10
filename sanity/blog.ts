export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your Blog Article',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        // {
        //   type: 'image',
        //   fields: [
        //     {
        //       type: 'text',
        //       name: 'alt',
        //       title: 'Alternative text',
        //       description: "Describe the image for people who can't see it",
        //       options: {
        //         isHighlighted: true,
        //       },
        //     },
        //     {
        //       type: 'text',
        //       name: 'caption',
        //       title: 'Caption',
        //       options: {
        //         isHighlighted: true,
        //       },
        //     },
        //   ],
        //   options: {
        //     hotspot: true,
        //   },
        // },
      ],
    },
  ],
}
