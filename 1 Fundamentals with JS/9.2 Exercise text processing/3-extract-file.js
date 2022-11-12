function extractFile(path) {
    // is too easy for comments :D
    const array = path.split('\\');
    const fileName = array.pop();
    const dotIndex = fileName.lastIndexOf('.');
    const name = fileName.slice(0, dotIndex);
    const extension = fileName.slice(dotIndex + 1,);
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`)
}
extractFile('C:\\Internal\\training-internal\\Template.cs.pptx')

// Write a function that receives a single string - the path to a file (the '\' character is escaped)

// Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, as template.bak should be the file name, while pptx is the extension).