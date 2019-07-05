import React from 'react';

import styled from 'styled-components';

import { zIndexArtworkMainDecor } from '../../styles/designTokens';

function GenderFlowerArtwork({ className }) {
  return (
    <svg
      data-testid="gender-flower-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="44"
      viewBox="0 0 45 44"
      className={className}
    >
      <path
        fill="currentColor"
        d="M19.193 43.193a6.16 6.16 0 0 1-.958-.078c-1.675-.265-2.952-1.049-3.693-2.267-.854-1.406-.96-3.362-.291-5.368l.307-.918-.807.535c-1.411.936-3.147 1.495-4.643 1.495-1.1 0-2.62-.306-3.611-1.765-1.065-1.566-1.454-3.079-1.155-4.496.362-1.719 1.716-3.321 4.022-4.761l.795-.496-.93-.117c-1.859-.234-4.495-1.18-5.937-2.534-1.492-1.402-.833-4.416-.276-5.814.65-1.631 2.129-2.458 4.395-2.458 1.537 0 3.413.417 5.018 1.115l.396-.51C9.732 12.067 8.794 9.771 9.038 7.93c.151-1.143.773-2.134 1.849-2.945 1.029-.776 2.068-1.17 3.09-1.17 2.779 0 4.865 2.883 5.806 5.352l.642-.075c.713-5.424 3.423-7.349 5.526-7.349.358 0 .735.046 1.118.135 1.889.443 3.186 1.347 3.854 2.689.839 1.685.66 4.064-.505 6.698l-.483 1.093.979-.685c2.082-1.457 3.851-2.165 5.404-2.165a4.38 4.38 0 0 1 1.62.3c.836.331 1.924 1.547 2.379 2.431.295.574.212.65-.034.878-.226.208-.535.494-.592 1.105-.094.999.502 1.37.895 1.616.441.275.623.388.037 1.333-.658 1.061-2.178 1.746-3.519 2.35-.486.219-.945.426-1.343.641l-1.011.545 1.145.08c3.039.213 6.832 1.134 7.639 4.309.391 2.131-.471 4.972-2.848 5.999-.542.234-1.177.353-1.888.353-1.461 0-3.305-.522-5.061-1.433l-.422.493c.271.369 1.521 2.52 2.122 3.553l.355.609c-.028.627.144 1.164.297 1.641.231.722.431 1.346-.018 2.206-.74 1.418-2.371 2.256-3.277 2.629-.69.284-1.252.411-1.822.411-.447 0-.915-.077-1.473-.243-.277-.083-1.126-.436-1.26-.546a.296.296 0 0 1 .068.306.297.297 0 0 1-.236.207l.182-.629c-.207-.107-.35-.355-.502-.618-.084-.145-.17-.294-.273-.428l-.563.35a.317.317 0 0 1 .057-.22l.256-.134c.065 0 .107.022.107.022-.144-.078-.702-.65-.784-.825-.157-.333-.294-.67-.439-1.027-.211-.518-.429-1.054-.713-1.579l-.476-.878-.146.988c-.383 2.573-1.615 6.89-5.584 6.89z"
      />
      <path
        fill="#fff"
        d="M23.8 12.33c-2.143 1.094-4.778 1.595-7.066 1.761a9.174 9.174 0 0 0 5.568 16.463 9.174 9.174 0 0 0 9.174-9.174c0-4.557-3.322-8.335-7.676-9.05z"
      />
      <circle fill="#222" cx="19.279" cy="22.405" r=".837" />
      <circle fill="#222" cx="21.361" cy="21.952" r=".666" />
      <path fill="#222" d="M21.361 19.718a.927.927 0 1 0-1.854 0 .927.927 0 0 0 1.854 0z" />
      <path
        fill="#222"
        d="M44.341 24.474a6.57 6.57 0 0 1-.044-.191c-.032-.144-.064-.293-.126-.47a3.157 3.157 0 0 1-.065-.177 3.28 3.28 0 0 0-.189-.455c-.201-.4-.49-.776-.885-1.153-.562-.524-1.244-.954-2.149-1.356-.654-.29-1.376-.526-2.275-.741a15.877 15.877 0 0 0-1.109-.216 8.414 8.414 0 0 1 1.396-.646l.035-.013c.318-.135.593-.32.836-.491.269-.178.486-.337.737-.528.263-.21.543-.453.804-.807.166-.223.292-.485.374-.756-.717-.359-1.299-.939-1.544-1.768-.287-.975.179-1.876.934-2.401l-.037-.362a5.745 5.745 0 0 1-.65-.528 4.334 4.334 0 0 1-.9-1.198c-.187-.382-.28-.788-.411-1.185a5.833 5.833 0 0 0-.506-.276 8.947 8.947 0 0 0-.625-.267 3.892 3.892 0 0 0-.771-.195c-1.078-.152-2.026.062-2.733.265-.739.215-1.499.536-2.324.98-.129.069-.257.141-.385.214.474-1.461 1.068-4.011.247-5.903l-.026-.048c-1.061-1.875-2.299-2.516-4.079-2.99l-.202-.054c-.967-.26-2.172-.584-3.233-.211-.428.152-1.481.87-1.582.957a9.16 9.16 0 0 0-1.521 1.884c-.166.27-.256.534-.336.768-.056.163-.108.317-.182.46-.456.612-.74 1.429-.935 2.288-.079-.156-.16-.308-.243-.457a13.746 13.746 0 0 0-1.332-1.995c-.567-.691-1.237-1.227-1.939-1.55l-.076-.034-.084-.008c-.41-.04-.832-.1-1.239-.158-.436-.062-.887-.127-1.339-.169l-.062-.006-.107.016-.12.019a6.84 6.84 0 0 0-2.421.974 7.364 7.364 0 0 0-1.931 1.739l-.02.027c-.035.053-.073.105-.11.157-.087.124-.178.253-.271.424a6.219 6.219 0 0 1-.085.163c-.073.136-.155.29-.217.465-.17.44-.252.924-.252 1.473-.01.837.176 1.674.565 2.547.154.37.329.709.524 1.082.181.347.362.688.554 1.026.161.283.333.563.515.843a7.481 7.481 0 0 0-.623-.149l-.571-.084c-.113-.019-.229-.031-.345-.044-.08-.009-.16-.018-.24-.029l-.589-.084c-.092-.01-.183-.026-.274-.042a5.352 5.352 0 0 0-.291-.046l-.584-.07c-1.046-.098-1.975.018-2.752.346-.876.355-1.674 1.01-2.245 1.845a5.887 5.887 0 0 0-.42.72l-.081.161.041.176a.787.787 0 0 1 .015.289c-.066.478-.329 1.006-.577 1.459l-.047.086-.011.097a7.287 7.287 0 0 0 .082 2.3l.008.032c.018.067.034.134.05.201.037.153.075.312.144.497.025.062.048.122.07.182.057.152.122.324.219.5.136.259.303.503.509.747l.073.087.104.047a7.938 7.938 0 0 1 1.528.878c.256.189.527.298.766.395.255.103.476.192.647.358.042.041.078.09.116.159l.094.173.187.062a14.585 14.585 0 0 0 1.652.434c-.936.666-1.937 1.501-2.628 2.416l-.029.043c-1.159 1.918-1.229 3.354-.267 5.484l.1.223c.388.871.871 1.954 1.701 2.604.308.244.625.352.904.447.154.052.299.102.43.168l.112.062c.453.253.739.414.961.369.777.139 1.496.061 2.279-.048.368-.052.696-.225.985-.377.204-.107.415-.218.558-.234a4.16 4.16 0 0 0 1.2-.35c-.099.456-.173.911-.223 1.362-.076.733-.07 1.821.382 2.835.465 1.095 1.271 1.814 1.863 2.221a6.81 6.81 0 0 0 2.494 1.064 7.47 7.47 0 0 0 1.57.17c.381 0 .762-.031 1.141-.092.065-.015.131-.027.195-.04.154-.03.313-.061.501-.123.064-.024.126-.044.189-.065a3.49 3.49 0 0 0 .487-.189 4.458 4.458 0 0 0 1.243-.906c.738-.746 1.19-1.6 1.467-2.178.309-.649.556-1.359.803-2.305.027-.107.052-.214.077-.323.1.181.201.368.298.565.068.139.078.279.089.457.022.332.051.788.532 1.182.286.246.566.467.831.531.08.135.171.278.278.412-.039.46.445.631 1.535 1.018.14.05.254.09.308.112 1.243.514 2.525.467 3.81-.139l.06-.029c.953-.326 2.102-1.079 2.857-1.874.692-.728 1.467-1.762 1.318-3.304a2.774 2.774 0 0 0-.207-.842.509.509 0 0 0 .045-.031l.159-.11.014-.095a.652.652 0 0 0 .062-.182c.053-.281.148-.78-2.369-4.18.388.122.805.266 1.282.443.775.288 1.539.551 2.35.594.801.059 1.798-.167 2.731-.615.802-.367 1.509-.998 2.044-1.823a6.803 6.803 0 0 0 .954-2.408 6.955 6.955 0 0 0 .025-2.575l-.005-.036zM30.945 12.651c.09-.124.204-.23.34-.303.089-.048.169-.103.253-.157l.019-.018c.188-.165.386-.321.585-.471.38-.286.794-.43 1.257-.488a8.911 8.911 0 0 1 1.16-.42c.67-.19 1.373-.29 1.986-.17.15.027.293.073.423.127.157.063.32.14.467.217.3.16.577.337.807.553.39.357.687.813.9 1.333-.127.203-.243.41-.34.633-.163.373-.283.793-.267 1.24.01.447.173.893.417 1.25.14.207.3.39.47.56a.715.715 0 0 1-.087.16c-.09.143-.25.3-.437.467-.393.353-.793.687-1.177 1.04a4.99 4.99 0 0 1-.587.54c-.203.173-.453.27-.687.393-.487.207-1.003.34-1.516.46l-1.53.41c-.513.13-1.033.243-1.56.35-.65.143-1.31.277-1.97.42a6.913 6.913 0 0 0-.3-1.147 6.54 6.54 0 0 0-2.38-3.154l.07-.101a15.887 15.887 0 0 1 .718-.929c.13-.157.264-.311.399-.463l.15-.169c.189-.206.381-.409.58-.607.023-.02.043-.043.067-.063a17.254 17.254 0 0 1 1.77-1.493zm-9.881-.732c.077-.347.02-.49.053-.843.023-.217.09-1.003.013-.94.097-.16.653-1.403.727-1.72-.047.26-.213.973-.243 1.13.187-.477.403-.973.527-1.473.093-.383-.037-1.083.067-1.403.053-.16.543-.453.657-.683.093-.193.113-.42.17-.627-.033.097-.067.197-.097.293.67-2.783 4.466-2.976 6.133-.9a1.158 1.158 0 0 0-.207-.25c.32.157.727.4.9.713a.437.437 0 0 0-.013-.267c.443.92.67.993.617 2.063-.02.39-.323 1.287-.327 1.437.013 1.72-1.157 3.606-1.74 5.033a20.104 20.104 0 0 0-1.546 1.61c-.217.243-.427.497-.63.753-1.364-.651-2.923-.844-4.409-.597-.259-1.13-.501-2.275-.804-3.426a.656.656 0 0 0-.017-.23c.056.11.169.313.169.327zm-9.797-5.878a3.24 3.24 0 0 1 .937-.297c1.07-.638 2.382-.928 3.457-.487.56.223 1.02.62 1.43 1.117.423.537.793 1.11 1.123 1.71.653 1.2 1.093 2.516 1.437 3.88.033.13.063.257.093.387.083.357.158.721.236 1.083.053.247.11.491.161.74a5.837 5.837 0 0 0 .046.23c.007.023.01.05.017.073.04.207.083.41.127.617.027.14.057.28.087.423l.007.023.009.042a7.159 7.159 0 0 0-3.373 2.504c-.799-.499-1.605-1.004-2.434-1.493a16.36 16.36 0 0 1-3.384-4.013 6.948 6.948 0 0 1-.782-1.881c-.781-1.493-.809-3.843.806-4.658zM5.752 22.784a7.073 7.073 0 0 1-.774-.403 3.634 3.634 0 0 1-.899-.464c-1.162-.839-1.337-2.421-.563-3.506a5.434 5.434 0 0 1 .549-1.494c.28-.51.653-.967 1.147-1.26.25-.133.513-.27.81-.33.07-.02.143-.04.217-.057l.233-.017c.157-.003.297-.04.473-.023.683.023 1.373.103 2.013.367l.477.187c.157.073.317.133.473.193.317.127.643.23.957.37.633.263 1.253.567 1.87.9.869.453 1.733.953 2.615 1.441.315.255.635.504.962.744a6.786 6.786 0 0 0-.467 2.028c-.017.213-.03.43-.043.647-.3.08-.6.167-.883.247-1.353.38-2.643.913-3.91 1.517a16.611 16.611 0 0 1-3.366-.45 11.389 11.389 0 0 1-1.891-.637zm9.16 9.649c-.113.073-.253.273-.433.36-.123.063-1.027.407-1.027.437-.207.1.85-.63 1.037-.763-.93.427-1.513.907-2.293 1.487-.557.413-.067.143-.847.237-.367.04-.557.223-.837.393.073-.04.15-.083.223-.127-.1.067-.197.123-.297.17l-.02.01c-2.273 1.093-4.75-2.076-4.023-4.266a.856.856 0 0 0-.11.273c-.093-.333-.037-.767.097-1.083a.432.432 0 0 0-.26.123c.473-.88.603-1.06 1.35-1.677.327-.267 1.473-.847 1.563-.943.64-.723 1.607-1.273 2.576-1.756.843-.427 1.687-.8 2.333-1.203.247-.153.493-.297.74-.437.367-.203.733-.4 1.093-.633.007.653.077 1.303.267 1.923.035.114.078.216.123.313-.345.219-.691.438-1.042.648-.426.253-.851.507-1.3.72.487-.109.964-.264 1.439-.417.408-.134.813-.276 1.219-.421.144.199.303.391.465.613.097.13.637.93.497.677.243.249.491.483.744.702-.729 1.082-1.479 2.166-2.187 3.311-.26.427-.507.863-.74 1.313-.131.01-.314-.007-.35.016zm9.049.744c0 .047-.003.097-.007.143-.053 1.34-.237 2.67-.603 3.933a11.41 11.41 0 0 1-.723 1.88c-.29.59-.643 1.143-1.067 1.553a2.44 2.44 0 0 1-.657.47c-.107.053-.267.087-.393.137-.137.043-.29.057-.433.09a5.022 5.022 0 0 1-1.836-.093l-.015-.004a3.231 3.231 0 0 1-1.862-.289c-1.496-.734-1.337-2.349-1.113-3.743a.822.822 0 0 1 .091-.256c.079-.464.187-.921.309-1.377.263-.947.653-1.856 1.11-2.746.738-1.44 1.657-2.836 2.528-4.284a5.437 5.437 0 0 0 1.689.665c.794.425 1.782.516 2.782.388.044.309.084.618.114.929.086.867.119 1.737.086 2.604zm-.184-5.05c-.247.03 1.09-.263 1.32-.323-.87.147-1.983.313-2.87.303-.547-.007-1.133-.373-1.767-.597l.167.05c-2.19-.67-3.603-3.09-3.456-5.366.007-.12.02-.24.037-.36.083-.603.597-1.79.597-1.833.14-.477.437-.913.713-1.32a.698.698 0 0 0-.297.153c.633-.64.9-1.077 1.533-1.493.717-.47 1.75-.543 2.233-.713 1.057-.397 2.263-.187 3.34.267.42.177.817.387 1.18.617.34.21.647.437.91.657.763.637 1.327 1.463 1.786 2.34.067.123.12.253.167.383.016.046.029.094.044.142.075.538.078 3.168-.936 4.22-.268.368-.333.92-.465 1.098-.083.113-.5.377-.647.643.04-.113.143-.4.153-.437-.34.25-.377.38-.723.647-.217.167-.993.667-.853.653-.129.069-2.159.219-2.166.269zm11.095 8.6c-.063.96-.66 1.767-1.463 2.33-.85.593-1.697 1.203-2.73 1.043.54-.07-.71-.303-.91-.38-.29-.11-1.053-.253-1.307-.427-.35-.24-1.243-2.24-1.587-2.123-.07-.447-.483-.823-.66-1.237-.283-.653-.43-1.357-.723-2.006-.027-.057-.08-.153-.147-.28l-.117-.21c.004-1.35-.14-2.696-.413-4.01a8.36 8.36 0 0 0 1.497-.57c-.1.027-.207.043-.313.05.77-.357 1.7-.86 2.42-1.487.874.488 1.749.997 2.652 1.476l.05.131.043.105c.454.462.659 1.156 1.041 1.605h-.1c.307.403 1.113.843 1.217 1.32-.097-.063-.193-.127-.293-.187.19.463.667.973.933 1.537.473 1.003.987 2.177.91 3.32zm7.702-10.02c-.048.48-.242.882-.529 1.21-.345.957-.962 1.802-1.839 2.21-.56.267-1.183.333-1.836.293-.683-.07-1.376-.08-2.076-.173-.084-.011-.166-.033-.249-.049a22.506 22.506 0 0 0-1.117-.363 5.552 5.552 0 0 1-.6-.318c-.6-.37-1.227-.683-1.823-1.06-.809-.499-1.609-1.029-2.423-1.55a3.76 3.76 0 0 0-.407-.257l-.383-.242.013-.023c.14-.251.226-.509.291-.763h.001c.318-.415.493-.984.575-1.585.438.04.857.048 1.283.057.5.008.998.007 1.495-.001a49.4 49.4 0 0 1-1.453-.33c-.43-.107-.867-.217-1.271-.353a8.16 8.16 0 0 0-.056-1.295 67.1 67.1 0 0 0 1.977-.441c.342-.085.683-.18 1.025-.277a17.555 17.555 0 0 1 4.691.437c.67.167 1.33.373 1.947.657.538.246 1.052.544 1.478.907.401.267.749.554.964 1.109.246.637.389 1.522.322 2.2z"
      />
    </svg>
  );
}

const GenderFlower = styled(GenderFlowerArtwork)`
  position: absolute;
  z-index: ${zIndexArtworkMainDecor};
  color: ${props => props.theme.primaryColor};
`;

export default GenderFlower;
