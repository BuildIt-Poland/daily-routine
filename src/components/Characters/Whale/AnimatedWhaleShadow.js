import React from 'react';
import styled, { keyframes } from 'styled-components';

function WhaleShadowArtwork(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="233" height="28" viewBox="0 0 233 28">
      <path
        d="M130.123 1.393l-.265.013c.017-.006.077-.01.265-.013zm66.591 18.81c-5.333.547-10.626 1.029-15.978 1.109 4.198.033 8.396.027 12.596-.032-1.083.266-3.025 1.481-3.56 1.136.978.63 4.114-.278 5.207-.389 2.392-.243 4.783-.501 7.172-.784-1.785-1.113-3.381-1.258-5.437-1.04zm28.079-4.592c-1.597.196-3.194.388-4.79.587-5.505.687-11.215 1.206-16.817 2.432a36.68 36.68 0 0 0-5.719.268l-15.256 1c-2.079.298-5.428-.138-6.361.037-11.001 2.074-25.256 1.873-36.49 2.631.12-.006.184.03.192.11-.539.753-2.961.3-3.707.881-.05.039.952.102 1.013.102.952.003 1.907-.045 2.858-.089 2.276-.104 5.167-1.208 7.358-.482.83.275.602.369-.112.519-1.17.245-2.427.308-3.623.425-1.933.19-4.556.108-6.326.854 5.173-.26 10.347-.571 15.525-.739.179-.006 2.854-.165 2.87.093.042.687-8.674 1.454-9.257 1.5-4.871.386-9.75.709-14.628 1.024.256-.086-.458-.166-.504-.175-.624-.117-1.335-.088-1.971-.104-2.143-.057-4.283.021-6.423.093-4.362.148-8.722.327-13.081.506-6.95.286-13.854.645-20.809.337-3.837-.169-7.639.063-11.467-.19-2.744-.182-5.644-.414-8.39-.34-3.299.089-6.509.064-9.82-.131-3.302-.195-6.207-.641-9.964-1.049-3.413-.37-6.857-.899-10.254-1.357 1.555.394 2.902 1.13 4.471 1.484-.324-.015-4.446-.815-7.235-1.008-2.085-.697-3.987-.43-7.089-.698-3.618-.312-11.419-1.277-14.82-2.471-3.097-1.087-7.108-2.055-7.377-2.223-1.874-1.169-2.005-1.702-3.783-3-.929-.678-1.225-1.896-1.874-2.581-.281-1.369-.145-2.225.688-3.297 6.395-4.024 11.097-4.439 17.202-6.017 5.949-1.151 12.085-1.804 18.099-2.351.493-.045.986-.084 1.479-.126.502.3 1.017.484 1.54.624.332-.096.664-.194.999-.286.445-.122.896-.219 1.343-.331 5.949-.189 10.783-.891 15.527-.856-1.374.217 1.747.056 1.61.233 2.361.041 1.744-.311 3.871-.341l1.94.205c4.956-.538 3.406.26 8.17-.02 3.072-.416 7.184.13 11.803-.281l.147.198c3.544-.209 5.386.163 8.258.032.754.201-.708.111-.612.366 2.924-.185-.754.428 1.202.193 4.102.229 8.169-.837 12.124-.743 4.229-.282 7.869.569 8.63.093l-2.176-.07 5.826.053.15.181c2.368-.08 7.971.289 10.904.092-.034.014.178.038.34.077 3.006-.057 3.788.213 6.482.017l-.326.063c4.727-.277 14.987.28 22.338.652.105.138 1.183.243 2.616.333.425-.149.823-.285 1.123-.365 3.634.429 20.269 1.604 26.239 2.246 1.855.199 3.709.618 5.537 1.051 1.102.141 2.26.308 3.492.502l10.205.681c.872 1.195 1.605 1.099 3.264 1.279 3.929.427 7.744.372 11.824 1.061 4.36.736 8.523 2.837 8.701 3.483.449 1.623-3.967 2.316-6.899 3.123zM13.819 17.502c-.916-.473-8.269-3.837-7.561-5.27-1.463-.263-2.948.748-1.199 1.904 3.833 2.531 6.691 2.613 8.76 3.366zm121.375 6.759c-.615-.092-3.668.008-4.014-.923-.147-.395 2.622-1.001 2.703-1.019-4.901.301-9.802.544-14.704.731 4.961 2.336 10.858 1.586 16.015 1.211z"
        opacity=".2"
        fill="#222"
      />
    </svg>
  );
}

const shadowAnimation = keyframes`
  0% { transform: scalex(0.8) translatey(260px); }
	50% { transform: scalex(1) translatey(260px); }
	100% { transform: scalex(0.8) translatey(260px); }
`;

const AnimatedWhaleShadow = styled(WhaleShadowArtwork)`
  animation: ${shadowAnimation} 5s ease-in-out infinite;
  position: absolute;
  transform: translatey(260px);
`;

export default AnimatedWhaleShadow;
