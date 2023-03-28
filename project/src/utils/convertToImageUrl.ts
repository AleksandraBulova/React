export const convertToImageUrl = (files: FileList) => {
  return new Promise((res) => {
    const fr = new FileReader();
    const file = files[0];
    fr.readAsArrayBuffer(file);
    fr.onload = function () {
      if (fr.result) {
        const blob = new Blob([fr.result]);
        const url = URL.createObjectURL(blob);
        res(url);
      }
    };
  });
};
