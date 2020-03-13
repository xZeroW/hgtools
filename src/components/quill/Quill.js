import React from 'react';
import { useQuill } from 'react-quilljs';

import 'quill/dist/quill.snow.css';

const Quill = () => {
  const { quillRef } = useQuill();
  return(
    <div className="col-12">
      <div ref={quillRef} />
    </div>
  );
};

export default Quill;