import React, { useState } from 'react';
import styles from './ModalNgKCngVic.module.css';

const ModalNgKCngVic = () => {
  // State to manage the task and completion time
  const [task, setTask] = useState('');
  const [completionTime, setCompletionTime] = useState('');

  // Event handler for updating task input
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleCompletionTimeChange = (e) => {
    setCompletionTime(e.target.value);
  };

  // Function to handle form submission (you can implement this as needed)
  const handleSubmit = () => {
    // Add your code to handle form submission (e.g., sending data to an API)
    // You can access task and completionTime values from the state here
  };

  return (
    <div className={styles.modalNgKCngVic}>
      <div className={styles.labelParent}>
        <div className={styles.label}>Đăng ký công việc</div>
        <img className={styles.closeIcon} alt="" src="/close.svg" />
      </div>
      <div className={styles.inputParent}>
        <div className={styles.input}>
          <div className={styles.label1}>Tên công việc</div>
          <div className={styles.input1}>
            <div className={styles.stroke} />
            <div className={styles.background} />
            <div className={styles.icon}>
              <img
                className={styles.outlineClose}
                alt=""
                src="/-outline--close.svg"
              />
            </div>
            <div className={styles.placeholderIcons}>
              <img
                className={styles.outlineSearch}
                alt=""
                src="/-outline--search.svg"
              />
              <img
                className={styles.outlineMenu}
                alt=""
                src="/-outline--search.svg"
              />
                      <input
                     type="text"
                     value={task}
                     onChange={handleTaskChange}
                    placeholder="Nhập tên công việc"
                    />
            </div>
          </div>
        </div>
        <div className={styles.input2}>
        <input
              type="text"
              placeholder="Thời gian hoàn thành"
              value={task.completionTime}
              onChange={(e) => handleTaskChange(index, 'completionTime', e.target.value)}
            />
          <div className={styles.input3}>
            <img
              className={styles.outlineSearch1}
              alt=""
              src="/-outline--search.svg"
            />
            <div className={styles.label4}>With Button</div>
            <img
              className={styles.outlineSearch1}
              alt=""
              src="/-outline--search.svg"
            />
            <img className={styles.ucalenderIcon} alt="" src="/ucalender.svg" />
          </div>
        </div>
      </div>
      <div className={styles.modalfooter}>
        <div className={styles.buttonParent}>
          <div className={styles.button}>
            <img
              className={styles.keyboardArrowRightIcon}
              alt=""
              src="/-outline--search.svg"
            />
              <button onClick={onCancelClick}>Hủy bỏ</button>
          </div>
          <div className={styles.filter}>
            <div className={styles.ucheckParent}>
              <img className={styles.ucalenderIcon} alt="" src="/ucheck.svg" />
              <div className={styles.spXpTheoParent}>
                <div className={styles.spXpTheo}>Sắp xếp theo</div>
                <div className={styles.mcU}>Cập nhật</div>
              </div>
            </div>
            <img
              className={styles.keyboardArrowRightIcon}
              alt=""
              src="/-outline--search.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNgKCngVic;
