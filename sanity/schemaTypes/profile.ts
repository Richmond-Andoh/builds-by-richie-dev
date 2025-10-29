import { defineField, defineType } from "sanity";

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "headline",
      title: "Professional Headline",
      type: "string",
      description: 'E.g., "Full Stack Developer"',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "headlineStaticText",
      title: "Headline Static Text",
      type: "string",
      description: 'The Static Part of your Animated Headline (eg. "I build")',
      placeholder: "I build",
    }),

    defineField({
      name: "headlineAnimatedWords",
      title: "Headline Animated Words",
      type: "array",
      of: [{ type: "string" }],
      description:
        'The Animated Part of your Headline / Words that will flip or animate in your headline (eg. "Web Apps", "Mobile Apps", "Games")',
      validation: (Rule) => Rule.min(2).max(10).unique(),
    }),

    defineField({
      name: "headlineAnimationDuration",
      title: "Headline Animation Duration",
      type: "number",
      description:
        "How long each word stays visiible before flipping (default: 3000ms)",
      initialValue: 3000,
      validation: (Rule) => Rule.min(1000).max(10000),
    }),

    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 3,
      description: "A brief introduction about yourself(2 to 3 lines)",
      validation: (Rule) => Rule.required().max(300),
    }),

    defineField({
      name: "fullBio",
      title: "Full Bio",
      type: "array",
      of: [{ type: "block" }],
      description: "A detailed introduction about yourself",
    }),

    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Alternative text for the image",
        },
      ],
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),

    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .regex(/^\d{10}$/)
          .error("Please enter a valid 10-digit phone number"),
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "E.g., 'San Francisco, CA' or 'Remote'",
    }),
    defineField({
      name: "availability",
      title: "Availability Status",
      type: "string",
      options: {
        list: [
          { title: "Available for hire", value: "available" },
          { title: "Open to opportunities", value: "open" },
          { title: "Not looking", value: "unavailable" },
        ],
      },
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "github", title: "GitHub", type: "url" },
        { name: "linkedin", title: "LinkedIn", type: "url" },
        { name: "twitter", title: "Twitter/X", type: "url" },
        { name: "website", title: "Personal Website", type: "url" },
        { name: "medium", title: "Medium", type: "url" },
        { name: "devto", title: "Dev.to", type: "url" },
        { name: "youtube", title: "YouTube", type: "url" },
        { name: "stackoverflow", title: "Stack Overflow", type: "url" },
      ],
    }),
    defineField({
      name: "yearsOfExperience",
      title: "Years of Experience",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "stats",
      title: "Profile Statistics",
      type: "array",
      description: "Key statistics to display on your about section",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "value",
              title: "Value",
              type: "string",
              description: "E.g., '50+', '100%', '24/7'",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "value",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "firstName",
      subtitle: "headline",
      media: "profileImage",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title,
        subtitle: subtitle,
        media: media,
      };
    },
  },
});
