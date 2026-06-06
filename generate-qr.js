import QRCode from 'qrcode';

const url = 'https://samuel1rebecca1brochure.vercel.app/';
const outputPath = 'wedding-qr-code.png';

const options = {
  width: 1000,
  margin: 2,
  color: {
    dark: '#292524',  // Tailwind stone-800
    light: '#ffffff' // White background
  }
};

QRCode.toFile(outputPath, url, options, (err) => {
  if (err) {
    console.error('Error generating QR code:', err);
    process.exit(1);
  }
  console.log('✨ High-resolution QR code generated successfully!');
  console.log(`Saved as: ${outputPath}`);
});
