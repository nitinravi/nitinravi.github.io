import { Icon } from '@iconify/react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-96 flex flex-col items-center py-20">
      <h2 className="text-4xl font-bold mb-12">Get in Touch 🤝</h2>
      <p className="text-lg text-gray-300">I don't mind if it's unprofessional lol</p>

      <a href="mailto:nitinravi18@gmail.com" className="mt-6">
        <Icon icon="ant-design:mail-twotone" style={{ fontSize: '48px', color: 'white' }} />
      </a>
    </section>
  );
};

export default Contact;
