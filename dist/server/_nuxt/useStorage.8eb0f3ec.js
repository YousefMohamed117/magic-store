import { p as projectStorage } from "./cartStore.8cb27db3.js";
import { ref } from "vue";
const useStorage = () => {
  const error = ref(null);
  const filePath = ref(null);
  const url = ref(null);
  const uploadImage = async (file) => {
    filePath.value = `pics/${file}`;
    const storageRef = projectStorage.ref(filePath.value);
    try {
      url.value = await storageRef.getDownloadURL();
    } catch (err) {
      error.value = err;
    }
  };
  const deleteImage = async (path) => {
    const storageRef = projectStorage.ref(path);
    await storageRef.delete();
  };
  return { error, filePath, url, uploadImage, deleteImage };
};
export {
  useStorage as u
};
//# sourceMappingURL=useStorage.8eb0f3ec.js.map
