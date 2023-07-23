// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import ButtonWithIcon from 'shared/buttons/button-with-icon/button-with-icon';
// import { Icon } from 'shared/icons';

// function MainCarousel() {
//   return (
//     <Carousel
//       infiniteLoop
//       showThumbs={false}
//       showIndicators={false}
//       showStatus={false}
//       renderArrowPrev={(onClickHandler) => (
//         <ButtonWithIcon
//           ariaLabel="Отправить письмо"
//           extraClass=""
//           hasBackground
//           icon={<Icon color="blue" icon="MailIcon" />}
//           onClick={onClickHandler}
//         />
//       )}
//       renderArrowNext={(onClickHandler) => (
//         <ButtonWithIcon
//           ariaLabel="Отправить письмо"
//           extraClass=""
//           hasBackground
//           icon={<Icon color="blue" icon="MailIcon" />}
//           onClick={onClickHandler}
//         />
//       )}
//     >
//       {Object.values(heroTextureImports).map((texture, index) => (
//         <Box key={`carousel-image-${index}`}>
//           <img
//             src={texture}
//             alt={`carousel-${index}`}
//             style={{
//               width: '100%',
//               height: '700px',
//               objectFit: 'cover',
//               backgroundAttachment: 'fixed',
//             }}
//           />
//           <Box
//             color="white"
//             padding="20px"
//             borderRadius="1px"
//             textAlign="left"
//             backgroundColor="rgba(0, 0, 0, 0.4)"
//             position="absolute"
//             top="46%"
//             left={isNonMobile ? '10%' : '0'}
//             right={isNonMobile ? undefined : '0'}
//             margin={isNonMobile ? undefined : '0 auto'}
//             maxWidth={isNonMobile ? undefined : '240px'}
//           >
//             <Typography color={shades.secondary[200]}>-- NEW ITEMS</Typography>
//             <Typography variant="h1">Summer Sale</Typography>
//             <Typography
//               fontWeight="bold"
//               color={shades.secondary[300]}
//               sx={{ textDecoration: 'underline' }}
//             >
//               Discover more
//             </Typography>
//           </Box>
//         </Box>
//       ))}
//     </Carousel>
//   );
// }

// export default MainCarousel;
