function getTableAttributes(emailClient) {
  switch (emailClient) {
    case 'outlook':
    case 'gmail':
      return 'cellpadding="0" cellspacing="0" border="0"';
    case 'apple':
    default:
      return '';
  }
}

// Fonction pour générer les icônes de contact (email, téléphone, site web)
function getContactIcon(type, iconStyle, primaryColor) {
  const icons = {
    email: {
      emoji: '📧',
      svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="${primaryColor}" style="vertical-align:middle;margin-right:4px;display:inline;"><path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/></svg>`
    },
    phone: {
      emoji: '📞',
      svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="${primaryColor}" style="vertical-align:middle;margin-right:4px;display:inline;"><path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/></svg>`
    },
    website: {
      emoji: '🌐',
      svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="${primaryColor}" style="vertical-align:middle;margin-right:4px;display:inline;"><path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.77 20 8.64 20 12C20 14.08 19.2 15.97 17.9 17.39Z"/></svg>`
    }
  };

  return iconStyle === 'emoji' ? icons[type].emoji + ' ' : icons[type].svg;
}

// Fonction pour générer les liens des réseaux sociaux (toujours avec leurs icônes spécifiques)
function generateSocialLinks(data) {
  const links = [];
  const style = `width: 20px; height: 20px; border: none; display: inline-block;`;

  const socialIcons = {
    linkedin: { emoji: '🔗', svg: 'https://cdn-icons-png.flaticon.com/512/174/174857.png', name: 'LinkedIn' },
    x: { emoji: '❌', svg: 'https://cdn-icons-png.flaticon.com/512/5968/5968958.png', name: 'X' }, // Changé de twitter à x
    instagram: { emoji: '📸', svg: 'https://cdn-icons-png.flaticon.com/512/174/174855.png', name: 'Instagram' },
    facebook: { emoji: '📘', svg: 'https://cdn-icons-png.flaticon.com/512/733/733547.png', name: 'Facebook' },
  };

  Object.entries(socialIcons).forEach(([key, icons]) => {
    // Vérifier aussi l'ancien nom "twitter" pour la compatibilité
    const url = data[key] || (key === 'x' ? data.twitter : null);
    if (!url) return;

    // Les réseaux sociaux utilisent toujours leurs icônes SVG spécifiques
    links.push(
      `<a href="${url}" style="display: inline-block; margin-right: 8px;">` +
      `<img src="${icons.svg}" alt="${icons.name}" style="${style}; filter: hue-rotate(0deg);">` +
      `</a>`
    );
  });

  return links.length
    ? `<div style="margin-top: 8px;">${links.join('')}</div>`
    : '';
}

const templates = {
  modern: (data) => {
    const tableAttrs = getTableAttributes(data.emailClient);
    const cleanUrl = (url) => url.replace(/^https?:\/\//, '');

    return `
      <table ${tableAttrs} style="font-family: -apple-system, BlinkMacSystemFont,'Segoe UI',Roboto; font-size:${data.fontSize}px;color:#333;border-collapse:collapse;">
        <tr>
          ${data.photoUrl ? `<td style="padding-right:20px;"><img src="${data.photoUrl}" alt="Logo" style="width:80px;max-height:60px;border:none;"></td>` : ''}
          <td>
            <div style="border-left:4px solid ${data.primaryColor};padding-left:15px;">
              ${data.fullName  ? `<div style="font-size:18px;font-weight:700;color:${data.primaryColor};">${data.fullName}</div>`  : ''}
              ${data.jobTitle  ? `<div style="font-size:14px;color:#666;">${data.jobTitle}</div>`                         : ''}
              ${data.company   ? `<div style="font-size:14px;font-weight:600;">${data.company}</div>`                    : ''}
              ${data.email     ? `<div><a href="mailto:${data.email}" style="color:#333;text-decoration:none;">${getContactIcon('email', data.iconStyle, data.primaryColor)}${data.email}</a></div>` : ''}
              ${data.phone     ? `<div><a href="tel:${data.phone}" style="color:#333;text-decoration:none;">${getContactIcon('phone', data.iconStyle, data.primaryColor)}${data.phone}</a></div>` : ''}
              ${data.website   ? `<div><a href="${data.website}" style="color:#333;text-decoration:none;">${getContactIcon('website', data.iconStyle, data.primaryColor)}${cleanUrl(data.website)}</a></div>` : ''}
              ${generateSocialLinks(data)}
            </div>
          </td>
        </tr>
      </table>
    `;
  },

  classic: (data) => {
    const tableAttrs = getTableAttributes(data.emailClient);
    const cleanUrl = (url) => url.replace(/^https?:\/\//, '');

    return `
      <table ${tableAttrs} style="font-family:Georgia,'Times New Roman',serif;font-size:${data.fontSize}px;color:#333;border-collapse:collapse;">
        <tr>
          ${data.photoUrl ? `<td style="padding-right:20px;"><img src="${data.photoUrl}" alt="Logo" style="width:80px;max-height:60px;"></td>` : ''}
          <td style="padding-top:10px;border-top:2px solid ${data.primaryColor};">
            ${data.fullName  ? `<div style="font-size:16px;font-weight:bold;color:${data.primaryColor};">${data.fullName}</div>`    : ''}
            ${data.jobTitle  ? `<div style="font-style:italic;color:#666;">${data.jobTitle}</div>`                                     : ''}
            ${data.company   ? `<div style="font-weight:bold;">${data.company}</div>`                                                    : ''}
            ${data.email     ? `<div><a href="mailto:${data.email}" style="color:#333;text-decoration:none;">${getContactIcon('email', data.iconStyle, data.primaryColor)}${data.email}</a></div>` : ''}
            ${data.phone     ? `<div><a href="tel:${data.phone}" style="color:#333;text-decoration:none;">${getContactIcon('phone', data.iconStyle, data.primaryColor)}${data.phone}</a></div>` : ''}
            ${data.website   ? `<div><a href="${data.website}" style="color:#333;text-decoration:none;">${getContactIcon('website', data.iconStyle, data.primaryColor)}${cleanUrl(data.website)}</a></div>` : ''}
            ${generateSocialLinks(data)}
          </td>
        </tr>
      </table>
    `;
  }
};

export function generateSignatureHTML(data) {
  return (templates[data.template] || templates.modern)(data);
}