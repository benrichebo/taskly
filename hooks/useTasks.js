import { useEffect, useState } from "react";
import { GET } from "../functions/GET";
import { POST } from "../functions/POST";
import { PUT } from "../functions/PUT";
import { useStorage } from "./useStorage";

export const useTasks = (type) => {
  const { sessionStorage } = useStorage("session");

  const [tasks, setTasks] = useState(null);
  const [pinnedTask, setPinnedTask] = useState(null);
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

    async pinTask(id) {
      setError("");
      setLoading(true);

      const data = await PUT(id, "/api/tasks/pin-task");
      if (data.msg.includes("successfully")) {
        setMessage(data.msg);
        sessionStorage.setItem("pinned-task", data);
        this.getPinnedTask;
      } else {
        setError(data.msg);
      }
      setLoading(false);
    },

    async deletePinTask(id) {
      setError("");
      setLoading(true);

      const data = await DELETE(id, "/api/tasks/pin-task");
      if (data.msg.includes("successfully")) {
        setMessage(data.msg);
        sessionStorage.setItem("pinned-task", data);
        this.getPinnedTask;
      } else {
        setError(data.msg);
      }
      setLoading(false);
    },

    getPinnedTask() {
      const data = sessionStorage.getItem("pinned-task");
      if (data) {
        setPinnedTask(data);
      }
    },

    async updateTask(credentials) {
      setLoading(true);
      const data = await PUT(credentials, `/api/tasks/${credentials?.id}`);
      if (data.msg.includes("successfully")) {
        setMessage(data.msg);
      } else {
        setError(data.msg);
      }
      setLoading(false);
    },

    async deleteTask(id) {
      setLoading(true);
      const data = await DELETE(credentials, `/api/tasks/${id}`);
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
      task.getPinnedTask();
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

  return { task, loading, data: tasks, taskData, pinnedTask, error, message };
};
