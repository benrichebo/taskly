import { useEffect, useState } from "react";
import { GET } from "../functions/GET";
import { POST } from "../functions/POST";
import { PUT } from "../functions/PUT";
import { useStorage } from "./useStorage";

export const useTasks = (type) => {
  const { sessionStorage } = useStorage("session");

  const [tasks, setTasks] = useState(null);
  const [taskData, setTaskData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  const task = {
    async getTasks(url) {
      setLoading(true);
      const data = await GET({}, url);
      if (data.msg) {
        setError(data.msg);
      } else {
        sessionStorage.setItem("tasks", data);
        setTasks(data);
      }
      setLoading(false);
    },

    async getTask(url) {
      setLoading(true);
      const data = await GET({}, url);
      if (data.msg) {
        setError(data.msg);
      } else {
        sessionStorage.setItem("task", data);
        setTaskData(data);
      }
      setLoading(false);
    },

    async addTask(credentials, url) {
      setError("");
      setLoading(true);

      const data = await POST(credentials, url);
      if (data.msg.includes("successfully")) {
        setMessage(data.msg);
      } else {
        setError(data.msg);
      }
      setLoading(false);
    },

    async updateTask(credentials, url) {
      setLoading(true);
      const data = await PUT(credentials, url);
      if (data.msg.includes("successfully")) {
        setMessage(data.msg);
      } else {
        setError(data.msg);
      }
      setLoading(false);
    },

    async deleteTask(url) {
      setLoading(true);
      const data = await DELETE(url);
      if (data.msg.includes("successfully")) {
        setMessage(data.msg);
      } else {
        setError(data.msg);
      }
      setLoading(false);
    },
  };

  useEffect(() => {
    if (type == "tasks") {
      const data = sessionStorage.getItem("tasks");
      if (!data) {
        tasks.getTasks();
      } else {
        setTasks(data);
      }
    }

    if (type == "task") {
      const data = sessionStorage.getItem("task");
      if (!data) {
        tasks.getTasks();
      } else {
        setTasks(data);
      }
    }
  }, []);

  return { task, loading, data: tasks, taskData, error, message };
};
